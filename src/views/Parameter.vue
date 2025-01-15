<template>
  <AdminLayout>
    <div class="vh-100 w-100 bg d-flex flex-column p-3">
      <Nav title="Parameters" />

      <div class=" flex-grow-1 position-relative pt-2 px-5 h-100 ">


        <!-- First Section: Items List -->
        <div v-if="!showDetailedView" class="row">
          <!-- Left Section: Items Cards -->
          <div class="col-md-8">
            <div class="d-flex justify-content-between align-items-center my-4">
              <h5>Individual Item Cost</h5>
              <button class="btn btn-success btn-green text-white rounded-2" @click="openModal1('add')">
                <img src="@/assets/Payment_Sales/plus.png" alt=""> Add new
              </button>
            </div>

            <div class="row">
              <span class="spinner-border spinner-border-lg text-success" role="status" aria-hidden="true"
                v-if="Loader"></span>
              <div v-for="(item) in paginatedList" :key="item.id" class="mb-3 col-4 ">
                <div class="card shadow-sm text-center" style="height: 330px;">
                  <div class="card-body">
                    <div class="d-flex justify-content-end gap-2 mb-4">
                      <a href="javascript:void(0)"
                        class="d-flex align-items-center justify-content-center rounded-circle border"
                        style="width: 40px; height: 40px;" @click="openModal1('edit', item.id)">
                        <img src="../assets/Parameter/edit.png" alt="">
                      </a>
                      <a href="javascrippt:void(0)"
                        class="d-flex align-items-center justify-content-center rounded-circle border"
                        @click="deleteParameter(item.id)" style="width: 40px; height: 40px;">
                        <img src="../assets/Parameter/trash.png" alt="">

                      </a>
                    </div>
                    <div class="icon">
                      <img :src="item.icon" alt="Icon" width="100" height="100" />
                    </div>
                    <h6 class="mt-2">{{ item.category }}</h6>
                    <p>{{ item.name }} <span class="count">{{ item.items.length }}</span></p>
                    <button class="btn btn-outline-success w-100 btn-outline-green"
                      @click="openDetailedView(item)">View</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pagination and Items Per Page Controls -->
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex gap-3 align-items-center">
                <span>Items per page:</span>
                <select v-model="itemsPerPage" class="form-select"
                  style="width: 65px; background-color: #28a745; color: white; border: none;">
                  <option value="10">10</option>
                  <option value="14">14</option>
                  <option value="20">20</option>
                </select>
                <p class="mb-0">
                  {{ displayedStartIndex }}-{{ displayedEndIndex }} of {{ totalItems }} items
                </p>
              </div>
              <div>
                <ul class="pagination mb-0">
                  <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="changePage(currentPage - 1)">
                      <img src="../assets/Payment_Sales/pageleft.png" alt="">
                    </button>
                  </li>
                  <li v-for="page in visiblePages" :key="page" class="page-item"
                    :class="{ active: currentPage === page }">
                    <button class="page-link" @click="changePage(page)">{{ page }}</button>
                  </li>
                  <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="changePage(currentPage + 1)">
                      <img src="../assets/Payment_Sales/pageright.png" alt="">
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Section: General Parameters Form -->
          <div class="col-4 " v-if="showRightSection">
            <div class="card bg-black text-white p-3">

              <form>
                <div>
                  <h5 class="fw-bold pb-2">Moving Parameters</h5>
                  <div class="mb-4" v-for="(param, index) in generalParams" :key="param.key">
                    <label :for="'param' + index" class="form-label">{{ param.label }} (£)</label>
                    <input type="text" class="inputs p-3" :id="'param' + index" placeholder="Placeholder"
                      v-model="param.value" />
                  </div>
                  <button type="button" class="btn btn-success btn-green w-100" @click="updateNewParameter('moving')">
                    <span v-if="movingLoader" class="spinner-border spinner-border-sm"></span>
                    <span v-else>Save</span>
                  </button>
                </div>
                <div>
                  <h5 class=" fw-bold py-3 mt-4"> Cleaning Parameters</h5>
                  <div class="mb-3" v-for="(param, index) in cleaningParams" :key="param.key">
                    <label :for="'param' + index" class="form-label">{{ param.label }} (£)</label>
                    <input type="text" class="inputs p-3" :id="'param' + index" placeholder="Placeholder"
                      v-model="param.value" />
                  </div>
                </div>
                <button type="button" class="btn btn-success btn-green w-100" @click="updateNewParameter('cleaning')">
                  <span v-if="cleaningLoader" class="spinner-border spinner-border-sm"></span>
                  <span v-else>Save</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Detailed View Section -->
        <div v-if="showDetailedView" class=" w-100 mt-4">
          <div class="row gap-4">
            <div class="col-md-1 rounded-circle d-flex align-items-center justify-content-center"
              style="width: 50px; height: 50px; background-color: rgba(255, 255, 255, 1);">
              <button class="btn btn-link text-decoration-none" @click="goBack">
                <img src="../assets/Payment_Sales/ArrowLeft.png" alt="">
              </button>
            </div>
            <!-- Left Column - Category Card -->
            <div class="col-md-3">
              <div class="card text-center border-white rounded-2 pt-5 p-3">
                <img :src="selectedItem.icon" alt="Category Icon" class="img-fluid mx-auto" width="60" height="60" />
                <h4 class="my-3">{{ selectedItem.name }}</h4>
                <button class="btn btn-success btn-green w-100 mb-2" @click="openModal1('edit', selectedItem.id)">Edit
                  Category</button>
                <button class="btn btn-outline-danger btn-outline-red w-100"
                  @click="deleteParameter(selectedItem.id)">Delete
                  Category</button>
              </div>
            </div>

            <!-- Right Column - Items Table -->
            <div class="col-md-6 bg-white p-3 rounded-2 border-white">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <span class="fw-bold item-name me-2">{{ selectedItem.name }}</span>
                  <span class="text-muted item-count">{{ selectedItem.items.length }}</span>
                </div>

                <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center"
                  @click="openModal2">
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.83444 3.56836V13.2568M3.99023 8.41256H13.6786" stroke="white" stroke-width="1.38683"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg> Add New
                </button>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in selectedItem.items" :key="index">
                    <td class="">{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td class="menu-container">
                      <svg @click="item.showMenu = !item.showMenu" xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" fill="currentColor" class="menu-icon" viewBox="0 0 16 16">
                        <path
                          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      </svg>

                      <div v-if="item.showMenu" class="menu">
                        <div @click="editItem(item)">Edit</div>
                        <div @click="deleteItem(item)">Delete</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        <!-- Modal 1-->
        <div v-show="showModal1" class="modal fade show" style="display: block; background: rgba(10, 11, 21, .5);">
          <!-- Modal content here -->
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content p-4">
              <div class="modal-header">
                <h5 class="modal-title m-auto">{{ this.addNewParameter ? 'Add' : 'Edit' }} Category</h5>
              </div>

              <div class="modal-body">
                <!-- Icon Selection -->
                <div class="mb-3">
                  <div class="rounded-circle border d-flex align-items-center justify-content-center m-auto mb-2"
                    style="width: 80px; height: 80px; background:rgba(236, 236, 238, 1); cursor: pointer;"
                    @click="selectImage">
                    <img :src="selectedIcon" alt="Selected Icon" class="img-fluid" v-if="selectedIcon" />
                    <img src="../assets/Modal/modal.png" alt="Default Icon" class="img-fluid" v-else />
                    <input type="file" @change="onImageSelected" accept="image/*" class="d-none" ref="fileInput" />
                  </div>
                  <p class="text-success cursor-pointer m-auto text-center" style="color: rgba(76, 149, 108, 1);">
                    Click to select an icon
                  </p>
                </div>
                <!-- Form Fields -->
                <form>
                  <div class="form-group mb-3">
                    <label for="itemName" class="mb-2 label">Category Name</label>
                    <input type="text" class="form-control inputs p-3" id="itemName" v-model="addCategory.name"
                      placeholder="Enter  name" />
                  </div>
                </form>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-danger btn-outline-red col-5 p-2"
                  @click="closeModal1">Cancel</button>
                <button type="button" class="btn btn-success col-5 p-2 btn-green" @click="createParameter">
                  <loader v-if="Loader" />
                  <span v-else>Add New</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal 2-->
        <div v-show="showModal2" class="modal fade show" style="display: block; background: rgba(10, 11, 21, .5);">
          <!-- Modal content here -->
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content p-4">
              <div class="modal-header">
                <h5 class="modal-title m-auto">Add Item</h5>
              </div>

              <div class="modal-body">
                <!-- Form Fields -->
                <form>
                  <div class="form-group mb-3">
                    <label for="itemName" class="mb-2 label">Item Name</label>
                    <input type="text" class="form-control inputs p-3" id="itemName" v-model="movingItems.name"
                      placeholder="Enter item name" />
                  </div>
                  <div class="form-group mb-4">
                    <label for="movingCost" class="mb-2 label">Moving Cost</label>
                    <input type="text" class="form-control inputs p-3" id="movingCost" v-model="movingItems.movingCost"
                      placeholder="Enter moving cost" />
                  </div>
                </form>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-danger btn-outline-red col-5 p-2"
                  @click="closeModal2">Cancel</button>
                <button type="button" class="btn btn-success col-5 p-2 btn-green" @click="addItems">
                  <loader v-if="Loader" />
                  <span v-else>Add Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script>
import Nav from '@/components/Nav.vue'
import more from '@/assets/Payment_Sales/more.png';
import AdminLayout from '@/layouts/AdminLayout.vue';

import loader from '@/components/loader.vue';
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'
import Loader from '@/components/loader.vue';


export default {
  components: {
    // Icon,
    Nav,
    AdminLayout,
    loader
  },
  data() {
    return {
      Loader: false,
      Loading: false,
      cleaningLoader: false,
      movingLoader: false,
      items: [

      ],
      itemDetails: [

      ],
      generalParams: [
        { label: "Cost Per Mile", value: "", key: "costPerMile" },
        { label: "Cost Per Hour", value: "", key: "costPerHour" },
        { label: "Base Rate", value: "", key: "baseRate" },
        // { label: "Disassembly Fee", value: "", key: "disassemblyRate" },
        // { label: "Reassembly Fee", value: "", key: "reassemblyRate" },
        // { label: "Cost Per Extra Floor", value: "", key: "costPerExtraFloor" },
      ],
      cleaningParams: [
        { label: "Cost Per Hour", value: "", key: "costPerHour" },
        { label: "Base Rate", value: "", key: "baseRate" },
      ],
      showDetails: true,
      showModal1: false,
      showModal2: false,

      addCategory: {
        name: "",
      },
      movingItems: {
        name: "",
        movingCost: ""
      },

      showDetailedView: false,
      selectedItem: {},
      showRightSection: true,
      selectedIcon: '',
      selectImageFile: '',
      // API DATA
      parameters: [],
      addNewParameter: true,
      editParameter: null,

      // pagination
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1, // Current page number
      totalItems: 0, // Total number of items (example)

    };
  },
  computed: {
    paginatedList() {
      return this.parameters.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedStartIndex() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    displayedEndIndex() {
      return Math.min(this.displayedStartIndex + this.itemsPerPage - 1, this.totalItems);
    },
    visiblePages() {
      // Only show the first few and last pages with ellipsis in between
      const range = [];
      if (this.totalPages <= 5) {
        for (let i = 1; i <= this.totalPages; i++) {
          range.push(i);
        }
      } else if (this.currentPage <= 3) {
        range.push(1, 2, 3, 4, '...', this.totalPages);
      } else if (this.currentPage > this.totalPages - 3) {
        range.push(1, '...', this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        range.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
      }
      return range;
    },
  },
  mounted() {
    this.fetchParameter();
    this.getParameter('moving');
    this.getParameter('cleaning');
  },
  methods: {
    changePage(page) {
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    async getParameter(type) {
      this.cleaningLoader = true
      this.movingLoader = true
      const url = `parameters/general-parameter?type=${type}`;

      try {
        const resp = await fetchFromApi(url);

        if (resp.status) {
          console.log(resp)
          if (type === 'moving') {
            for (const item of this.generalParams) {
              item.value = resp.data[item.key]
            }
          }
          if (type === 'cleaning') {
            for (const item of this.cleaningParams) {
              item.value = resp.data[item.key]
            }
          }
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      }
      finally {
        this.cleaningLoader = false
        this.movingLoader = false
      }
    },
    async updateNewParameter(type) {
      type === 'moving' ? this.movingLoader = true : this.cleaningLoader = true;

      const data = {}
      if (type === 'moving') {
        for (const item of this.generalParams) {
          data[item.key] = item.value
        }
      }

      if (type === 'cleaning') {
        for (const item of this.cleaningParams) {
          data[item.key] = item.value
        }
      }
      console.log(data)
      const url = `parameters/general-parameter/${type}`;

      try {
        const resp = await patchToApi(url, data);
        if (resp.status) {
          swal({
            text: "Parameter updated successfully!",
            icon: "success",
          });
          this.fetchParameter();
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        type === 'moving' ? this.movingLoader = false : this.cleaningLoader = false;

      }
    },
    async deleteItem(item) {
      console.log(item)
      this.Loader = true

      const url = `parameters/${this.selectedItem.id}/items/${item.id}`;

      try {
        const resp = await deleteFromApi(url);
        if (resp.status) {
          swal({
            text: "Item deleted successfully!",
            icon: "success",
          });
          this.fetchParameter();
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.Loader = false
      }
    },
    async addItems() {
      this.Loader = true;
      if (!this.movingItems.name || !this.movingItems.movingCost) {
        console.error("Validation failed: Missing required fields");
        this.Loader = false;
        return;
      }

      const url = `parameters/${this.selectedItem.id}/items`;

      try {
        const resp = await postToApi(url, this.movingItems);
        if (resp.status) {
          swal({
            text: "Item added successfully!",
            icon: "success",
          });
          this.fetchParameter();
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('Item Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.Loader = false;
      }
    },
    async updateParameter() {
      this.Loader = true
      const url = `parameters/${id}`;

    },
    async deleteParameter(id) {
      this.Loader = true
      const url = `parameters/${id}`;
      try {
        const resp = await deleteFromApi(url);
        if (resp.status) {
          swal({
            text: "Parameter deleted successfully!",
            icon: "success",
          });
          this.fetchParameter();
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.Loader = false
      }
    },
    // create parameter
    async createParameter() {
      if (!this.addCategory.name || !this.selectImageFile) {
        console.error("Validation failed: Missing required fields");
        return;
      }

      this.Loader = true;
      console.log("Selected Image File:", this.selectImageFile);

      const parameterData = {
        name: this.addCategory.name,
        // movingCost: this.addCategory.cost,
        icon: this.selectedIcon // Send as data string
      };
      const parameter = this.editParameter ?? this.selectedItem.id
      const url = this.addNewParameter ? 'parameters' : `parameters/${parameter}`;

      try {
        const resp = this.addNewParameter ? await postToApi(url, parameterData) : await patchToApi(url, parameterData);
        swal({
          text: resp.status ? "Parameter created successfully!" : resp.message,
          icon: resp.status ? "success" : "error",
        });

        this.addNewParameter = resp.status
        console.log('addNew', this.addNewParameter)
        if (resp.status) {
          this.fetchParameter()
        }

        console.log('Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.Loader = false;
      }
    },
    // fetch parameter
    async fetchParameter() {
      this.Loader = true
      const url = 'parameters';
      try {
        const resp = await fetchFromApi(url);
        console.log('Response:', resp);
        this.parameters = resp.data
        this.totalItems = resp.data.length
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.Loader = false
      }
    },
    onImageSelected(event) {
      const file = event.target.files[0];

      if (file) {
        this.selectImageFile = file;

        // Convert image to Base64 data string
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedIcon = e.target.result;  // This is your data string
        };
        reader.readAsDataURL(file);
      }
    },

    selectImage() {
      this.$refs.fileInput.click(); // Programmatically click the hidden file input
    },
    closeModal1() {
      this.showModal1 = false;
      const modalElement = document.getElementById('addCategoryModal');
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    },
    closeModal2() {
      this.showModal2 = false
    },
    addCategory() {
      // Handle adding the new category logic here (e.g., save to a list or API call)
      console.log("Category Added:", this.itemName, this.movingCost);
      this.closeModal();
    },
    selectIcon() {
      // Logic for selecting an icon (e.g., open a file picker or predefined icon selection)
      console.log("Select Icon clicked");
    },
    formatCurrency(value) {
      if (typeof value !== 'number') {
        return 'N/A'; // or return '0 £'
      }
      return `£ ${value.toLocaleString()}`;
    },
    goBack() {
      this.showDetailedView = false;
    },
    openDetailedView(item) {
      this.selectedItem = item;
      this.showDetailedView = true;
    },
    addItem() {
      console.log("Add New button clicked");
    },
    itemOptions(item) {
      console.log("Item options clicked", item);
    },
    openModal1(value, id) {

      this.showModal1 = true;
      if (value == 'edit') {
        this.addNewParameter = false
        this.editParameter = id
      } else {
        this.addNewParameter = true
      }
      // this.showRightSection = !this.showRightSection;
    },
    openModal2() {
      this.showModal2 = true;
    },
  }
}
</script>

<style scoped>
/* Style your component here */
.count {
  color: rgba(76, 149, 108, 1);
}

.border {
  border-color: rgba(0, 0, 0, 0.13);
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-footer {
  border-top: none;
}

.btn-link {
  font-size: 1.2em;
}

.form-label {
  font-weight: bold;
}

.card {
  border-radius: 8px;
}

.container {
  background-color: rgba(240, 240, 240, 1);
  width: 100%;
}

.btn-no-hover:hover {
  background-color: inherit;
  color: inherit;
  border-color: inherit;
}

.item-count {
  background-color: #F7FAFF;
  font-weight: bold;
  font-size: 14px;
  padding: 2px 8px;
  border-radius: 4px;
  color: #4C956C;

}

.item-name {
  font-size: 30px;
}

.menu-container {
  position: relative;
}

.menu-icon {
  cursor: pointer;
}

.menu {
  position: absolute;
  right: 20px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 8px;
}

.menu div {
  padding: 5px 10px;
  cursor: pointer;
}

.menu div:hover {
  background: #f5f5f5;
}

.pagination .page-item.active .page-link {
  background-color: #28a745;
  border-color: #28a745;
  color: #fff;
}

.pagination .page-link {
  color: #28a745;
}

.pagination .page-item.disabled .page-link {
  color: #ccc;
}
</style>

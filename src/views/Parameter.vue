<template>
    <div class="d-flex vh-100">
      <Sidebar class="flex-grow-1 overflow-auto" />
  
      <div class="container flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
            <!-- First Section: Items List -->
        <div v-if="!showDetailedView" class="row">
            <!-- Header Section -->
            <Nav title='Parameters'  />
    
            <!-- Left Section: Items Cards -->
            <div class="col-md-8">
                <div class="d-flex justify-content-between align-items-center my-4">
                <h5>Individual Item Cost</h5>
                <button class="btn btn-success btn-green text-white rounded-2" @click="openModal1">
                    <img src="../assets/Payment_Sales/plus.png" alt=""> Add new
                </button>
                </div>
                <div class="row">
                <div v-for="(item, index) in items" :key="index" class="mb-3 col-4">
                    <div class="card shadow-sm text-center">
                    <div class="card-body">
                        <div class="d-flex justify-content-end gap-2 mb-4">
                        <span class="d-flex align-items-center justify-content-center rounded-circle border" style="width: 40px; height: 40px;">
                            <img src="../assets/Parameter/edit.png" alt="">
                        </span>
                        <span class="d-flex align-items-center justify-content-center rounded-circle border" style="width: 40px; height: 40px;">
                            <img src="../assets/Parameter/trash.png" alt="">
                        </span>
                        </div>
                        <div class="icon">
                        <img :src="item.icon" alt="Icon" width="50" height="50" />
                        </div>
                        <h6 class="mt-2">{{ item.name }}</h6>
                        <p>Items <span class="count">{{ item.count }}</span></p>
                        <button class="btn btn-outline-success w-100 btn-outline-green" @click="openDetailedView(item)">View</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    
            <!-- Right Section: General Parameters Form -->
            <div class="col-4" v-if="showRightSection">
                <div class="card p-3">
                    <h5>General Parameters</h5>
                    <form>
                        <div class="mb-3" v-for="(param, index) in generalParams" :key="index">
                            <label :for="'param' + index" class="form-label">{{ param.label }}</label>
                            <input type="text" class="inputs p-3" :id="'param' + index" placeholder="Placeholder" v-model="param.value" />
                        </div>
                        <button type="submit" class="btn btn-success btn-green w-100">Update</button>
                    </form>
                </div>
            </div>
        </div>
    
        <!-- Detailed View Section -->
        <div v-if="showDetailedView" class="container mt-4">
          <Nav title='Parameters' />
          <div class="row gap-4">
            <div class="col-md-1 rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px; background-color: rgba(255, 255, 255, 1);">
              <button class="btn btn-link text-decoration-none" @click="goBack">
                <img src="../assets/Payment_Sales/ArrowLeft.png" alt="">
              </button>
            </div>
            <!-- Left Column - Category Card -->
            <div class="col-md-3">
              <div class="card text-center border-white rounded-2 pt-5 p-3">
                  <img :src="selectedItem.icon" alt="Category Icon" class="img-fluid mx-auto" width="60" height="60" />
                  <h4 class="mt-3">{{ selectedItem.name }}</h4>
                  <p>Items {{ selectedItem.count }}</p>
                  <button class="btn btn-success btn-green w-100 mb-2" @click="editCategory">Edit Category</button>
                  <button class="btn btn-outline-danger btn-outline-red w-100" @click="deleteCategory">Delete Category</button>
              </div>
            </div>

            <!-- Right Column - Items Table -->
            <div class="col-md-6 bg-white p-3 rounded-2 border-white">
              <div class="d-flex justify-content-between align-items-center mb-2">
                  <h5>{{ selectedItem.name }}</h5>
                  <button class="btn btn-success" @click="openModal2">
                    <i class="bi bi-plus"></i> Add New
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
                    <tr v-for="(item, index) in itemDetails" :key="index">
                      <td class="">{{ index + 1 }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.email }}</td>
                      <td>
                        <img :src="item.image" alt="">
                        <!-- <button class="btn btn-link p-0" @click="itemOptions(item)">
                            
                        </button> -->
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
                    <h5 class="modal-title m-auto">Add Category</h5>
                </div>

                <div class="modal-body">
                    <!-- Icon Selection -->
                    <div class="mb-3">
                    <div class="rounded-circle border d-flex align-items-center justify-content-center m-auto mb-2" style="width: 80px; height: 80px; background:rgba(236, 236, 238, 1);">
                        <img src="../assets/Modal/modal.png" alt="Selected Icon" class="img-fluid " />
                    </div>
                    <p class="text-success cursor-pointer m-auto text-center" style="color: rgba(76, 149, 108, 1);" @click="selectIcon">Select Icon</p>
                    </div>
                    <!-- Form Fields -->
                    <form>
                        <div class="form-group mb-3">
                            <label for="itemName" class="mb-2 label">Item Name</label>
                            <input type="text" class="inputs p-3" id="itemName" v-model="itemName" placeholder="Enter item name" />
                        </div>
                        <div class="form-group mb-4">
                            <label for="movingCost" class="mb-2 label">Moving Cost</label>
                            <input type="text" class="inputs p-3" id="movingCost" v-model="movingCost" placeholder="Enter moving cost" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-outline-danger btn-outline-red col-5 p-2" @click="closeModal1">Cancel</button>
                    <button type="button" class="btn btn-success col-5 p-2 btn-green" @click="addCategory">Add Now</button>
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
                  <h5 class="modal-title m-auto">Add Category</h5>
              </div>

              <div class="modal-body">
                  <!-- Form Fields -->
                  <form>
                      <div class="form-group mb-3">
                          <label for="itemName" class="mb-2 label">Item Name</label>
                          <input type="text" class="inputs p-3" id="itemName" v-model="itemName" placeholder="Enter item name" />
                      </div>
                      <div class="form-group">
                          <label for="movingCost" class="mb-2 label">Moving Cost</label>
                          <input type="text" class="inputs p-3" id="movingCost" v-model="movingCost" placeholder="Enter moving cost" />
                      </div>
                  </form>
              </div>
              <div class="modal-footer justify-content-between">
                  <button type="button" class="btn btn-outline-danger btn-outline-red col-5 p-2" @click="closeModal2">Cancel</button>
                  <button type="button" class="btn btn-success col-5 p-2 btn-green" @click="addCategory">Add Now</button>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  import { Icon } from '@iconify/vue';
  import Nav from '@/components/Nav.vue'
  import livingRoomIcon from '../assets/Parameter/livingroom.png';
  import bedroomIcon from '../assets/Parameter/bedroom.png';
  import diningIcon from '../assets/Parameter/dining.png';
  import packagingIcon from '../assets/Parameter/packaging.png';
  import kitchenIcon from '../assets/Parameter/kitchen.png';
  import bathroomIcon from '../assets/Parameter/bathroom.png';
  import more from '@/assets/Payment_Sales/more.png';
  export default {
    components: {
        Sidebar, Icon, Nav
    },
    data() {
      return {
        items: [
            { name: "Living Room", count: 12, icon: livingRoomIcon, price: 1000 },
            { name: "Bedroom", count: 13, icon: bedroomIcon, price: 1200 },
            { name: "Dining", count: 12, icon: diningIcon, price: 800 },
            { name: "Packaging", count: 12, icon: packagingIcon, price: 500 },
            { name: "Kitchen", count: 12, icon: kitchenIcon, price: 1500 },
            { name: "Bathroom", count: 12, icon: bathroomIcon, price: 700 },
        ],
        itemDetails: [
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more},
          {name:'Chest Drawer', email:'NGN 13,000', image:more}
        ],
        generalParams: [
          { label: "Cost Per Mile", value: "" },
          { label: "Cost Per Hour", value: "" },
          { label: "Base Rate", value: "" },
          { label: "Disassembly Fee", value: "" },
          { label: "Reassembly Fee", value: "" },
          { label: "Cost Per Extra Floor", value: "" },
        ],
        showDetails:true,
        showModal1: false,
        showModal2: false,
        itemName: "",
        movingCost: "",
        showDetailedView: false,
        selectedItem: {},
        showRightSection: true,
      };
    },
    methods: {
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
              return 'N/A'; // or return '0 NGN'
          }
          return `NGN ${value.toLocaleString()}`;
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
      openModal1() {
        this.showModal1 = true;
        // this.showRightSection = !this.showRightSection;
      },
      openModal2() {
        this.showModal2 = true;
      },
    }
  };
  </script>
  
  <style scoped>
  /* Style your component here */
  .count{
    color:rgba(76, 149, 108, 1);
  }

  .border{
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
</style>
  
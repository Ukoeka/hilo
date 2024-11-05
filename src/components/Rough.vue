<template>

    <div class="d-flex vh-100">
    <Sidebar class="flex-grow-1 overflow-auto" />

    <div class="container flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto" v-show="!isCleanerDetailsVisible">
      
        <Nav title="Cleaners" />
  
        <!-- Quotes Table Section -->
  
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="d-flex align-items-center gap-2 p-3">
                <h2>Cleaners</h2>
                <p class="p-1 rounded-1 m-0" style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">13 Drivers</p>
              </div>
              <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center" @click="isCleanerDetailsVisible = true">
                <span><img src="../assets/Payment_Sales/plus.png" alt=""></span>
                Add New
              </button>
          </div>
  
          <table class="table">
            <thead>
              <tr>
                <th>Serial Number <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Image <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Name <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Email <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Age<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>City<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Date Added<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Gender<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Status <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in payments" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="payment.image" alt="Driver Image" style="width: 30px; height: auto;">
                </td>
                <td>{{ payment.name }}</td>
                <td>{{ payment.email }}</td>
                <td>{{ payment.age }}</td>
                <td>{{ payment.city }}</td>
                <td>{{ payment.dateAdded }}</td>
                <td>{{ payment.gender }}</td>
                <td>
                    <span
                        :class="[
                        'd-flex align-items-center justify-content-center gap-2 rounded p-2', 
                        payment.status === 'Active' ? 'completed' : '',
                        payment.status === 'Inactive'? 'draft': ''
                        ]"
                        style="width: fit-content"
                    >
                        <div
                        :class="[
                            payment.status === 'Active' ? 'completed-circle' : '',
                            payment.status === 'Inactive' ? 'draft-circle' : ''
                        ]"
                        class="rounded-circle"
                        style="height: 10px; width: 10px;"
                        ></div>
                        {{ payment.status }}
                    </span>
                    </td>
                    <td>
                      <img src="../assets/Payment_Sales/more.png" alt="">
                    </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
          
      
    <!-- Cleaner details -->
    <div class="container flex-grow-1 h-100 overflow-auto position-relative pt-2 px-5" v-show="isCleanerAddDetailsVisible">
      <Nav title="Cleaners" />
      
      <div class="bg-white mb-5 rounded-4">

        <div class="rounded-4 mb-5 w-100">
            <div class="d-flex justify-content-between align-items-center p-2 rounded-top" style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
                <button class=" rounded-circle border bg-white" @click="isCleanerDetailsVisible = false"  style="height: 50px; width: 50px;"><img src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
                <div class="d-flex jusify-content-between align-items-center p-2 gap-2">
                  <button class="btn btn-success btn-green" @click="viewAssigned">View Assigned</button>          
                </div>
            </div>
        </div>

        <div class="row px-4 pb-5">
          <div class="col-md-2 text-center">
            <img src="../assets/Cleaners/Ellipse11.png" alt="Profile" class="rounded-circle img-fluid" width="120" />
          </div>

          <div class="col-md-10">
            <div class="row">
                <div class="col-12 mb-2">
                    <div class="row">
                        <div class="col-6">
                            <h5 class="">Yelvin Johnson</h5>
                            <p>YelvinJohnson@hotmail.com</p>
                        </div>
                        <div class="col-6 d-flex gap-2 align-items-center justify-content-end">
                            <button class="btn btn-outline-danger btn-outline-red p-2 col-3 " @click="deleteProfile">Delete</button>
                            <button class="btn btn-outline-success btn-outline-green p-2 col-3 " @click="editProfile">Edit</button>
                        </div>

                    </div>
                </div>
              <div class="">
                <form>
                  <div class="row">
                    <div class="col-md-6  mb-3">
                      <label class="mb-2 label">First Name</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.firstName"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Last Name</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.lastName"
                        placeholder="Enter last name"
                      />
                    </div>

                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Email</label>
                      <input
                        type="email"
                        class="inputs p-2"
                        v-model="user.email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Gender</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.gender"
                        placeholder="Enter gender"
                      />
                    </div>

                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Country</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.country"
                        placeholder="Enter country"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">City</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.city"
                        placeholder="Enter city"
                      />
                    </div>

                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Address</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.address"
                        placeholder="Enter address"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Language</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.language"
                        placeholder="Enter language"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add New cleaner -->
     <div class="container flex-grow-1 h-100 overflow-auto position-relative pt-2 px-5" v-show="isCleanerAddDetailsVisible">
      <Nav title="New Cleaner" />
      
      <div class="bg-white mb-5 rounded-4">

        <div class="rounded-4 mb-5 w-100">
            <div class="d-flex justify-content-between align-items-center p-2 rounded-top" style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
                <button class=" rounded-circle border bg-white" style="height: 50px; width: 50px;"><img src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
                <div class="d-flex jusify-content-between align-items-center p-2 gap-2">
                  <button class="btn btn-success btn-green" @click="viewAssigned">View Assigned</button>          
                </div>
            </div>
        </div>

        <div class="row px-4 pb-5">
          <div class="col-md-2 text-center">
            <img src="../assets/Cleaners/Ellipse11.png" alt="Profile" class="rounded-circle img-fluid" width="120" />
          </div>

          <div class="col-md-10">
            <div class="row">
                <div class="col-12 mb-2">
                    <div class="row">
                        <div class="col-6">
                            <h5 class="">Yelvin Johnson</h5>
                            <p>YelvinJohnson@hotmail.com</p>
                        </div>
                        <div class="col-6 d-flex gap-2 align-items-center justify-content-end">
                            <button class="btn btn-outline-danger btn-outline-red p-2 col-3 " @click="deleteProfile">Cancel</button>
                            <button class="btn btn-success btn-green p-2 col-3 " @click="editProfile">Save</button>
                        </div>

                    </div>
                </div>
              <div class="">
                <form>
                  <div class="row">
                    <div class="col-md-6  mb-3">
                      <label class="mb-2 label">First Name</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.firstName"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Last Name</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.lastName"
                        placeholder="Enter last name"
                      />
                    </div>

                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Email</label>
                      <input
                        type="email"
                        class="inputs p-2"
                        v-model="user.email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Gender</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.gender"
                        placeholder="Enter gender"
                      />
                    </div>

                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Country</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.country"
                        placeholder="Enter country"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">City</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.city"
                        placeholder="Enter city"
                      />
                    </div>

                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Address</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.address"
                        placeholder="Enter address"
                      />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Language</label>
                      <input
                        type="text"
                        class="inputs p-2"
                        v-model="user.language"
                        placeholder="Enter language"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Assigned cleaners -->
    <div class="container flex-grow-1 h-100 overflow-auto p-5" v-show="isCleanerDetailsVisible">

      <Nav title="Assigned Cleanings" />

      <div class="card p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center gap-2 p-3">
              <h2>Cleaners</h2>
              <p class="p-1 rounded-1 m-0" style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">13 Cleaners</p>
            </div>
            <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center" @click="isCleanerDetailsVisible = true">
              <span><img src="../assets/Payment_Sales/plus.png" alt=""></span>
              Add New
            </button>
        </div>
    
        <table class="table">
          <thead>
            <tr>
              <th>Serial Number <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Client Name <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Post Code <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Cleaning Type <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Hours <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Booking Date <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Time <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Phone Number <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th>Status <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cleaner, index) in cleaners" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ cleaner.clientName }}</td>
              <td>{{ cleaner.postCode }}</td>
              <td>{{ cleaner.cleaningType }}</td>
              <td>{{ cleaner.hours }}</td>
              <td>{{ cleaner.bookingDate }}</td>
              <td>{{ cleaner.time }}</td>
              <td>{{ cleaner.phoneNumber }}</td>
              <td>
                <span
                  :class="[
                    'd-flex align-items-center justify-content-center gap-2 rounded p-2', 
                    cleaner.status === 'Ongoing' ? 'ongoing' : '',
                    cleaner.status === 'Payment Pending' ? 'pending' : '',
                    cleaner.status === 'New' ? 'new' : '',
                    cleaner.status === 'Paid' ? 'paid' : ''
                  ]"
                  style="width: fit-content"
                >
                  <div
                    :class="[
                      cleaner.status === 'Ongoing' ? 'ongoing-circle' : '',
                      cleaner.status === 'Payment Pending' ? 'pending-circle' : '',
                      cleaner.status === 'New' ? 'new-circle' : '',
                      cleaner.status === 'Paid' ? 'paid-circle' : ''
                    ]"
                    class="rounded-circle"
                    style="height: 10px; width: 10px;"
                  ></div>
                  {{ cleaner.status }}
                </span>
              </td>
              <td>
                <img src="../assets/Payment_Sales/more.png" alt="">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Assign cleaner-->
    <div class="container flex-grow-1 h-100 overflow-auto p-5" v-show="isCleanerAddDetailsVisible">
      <Nav title="Assigned Cleanings" />
      
      <div class="col-12 mb-4">
        <button class=" rounded-circle border bg-white" @click="isCleanerDetailsVisible = false"  style="height: 50px; width: 50px;"><img src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
      </div>

      <div class="card p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="d-flex align-items-center gap-2 p-3">
            <h2>Cleaners</h2>
            <p class="p-1 rounded-1 m-0 bg-light-green text-dark-green">13 Cleaners</p>
          </div>
          <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center" @click="isCleanerDetailsVisible = true">
            <span><img src="../assets/Payment_Sales/plus.png" alt="Add New Icon" /></span>
            Add New
          </button>
        </div>
  
        <table class="table">
          <thead>
            <tr>
              <th>Serial Number <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>Image <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>Name <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>Email <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>Age <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>City <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>Date Added <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>Gender <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th>Status <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
              <th class="m-auto">Assign Cleaner <img src="../assets/Payment_Sales/arrowdown.png" alt="Sort Icon" /></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, index) in payments" :key="index">
              <td>{{ index + 1 }}</td>
              <td><img :src="payment.image" alt="Cleaner Image" class="cleaner-image" /></td>
              <td>{{ payment.name }}</td>
              <td>{{ payment.email }}</td>
              <td>{{ payment.age }}</td>
              <td>{{ payment.city }}</td>
              <td>{{ payment.dateAdded }}</td>
              <td>{{ payment.gender }}</td>
              <td>
                <span :class="['status-badge', statusClass(payment.status)]">
                  <div :class="['status-circle', statusClass(payment.status, true)]"></div>
                  {{ payment.status }}
                </span>
              </td>
              <td>
                <button v-if="index + 1" class="btn btn-success btn-green">Detail</button>
                <!-- <button v-if="payment.status === 'Payment Request'" class="btn" style="margin-left: 20px; border: 1px solid rgba(54, 136, 90, 1); background: transparent; color: rgba(54, 136, 90, 1)">Approve</button>
                <button v-if="payment.status === 'Payment Request'" class="btn" style="color: rgba(188, 78, 78, 1); background: transparent; margin-left: 20px; ">Deny</button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>  

</template>

<script>
import Nav from '@/components/Nav.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: { Nav, Sidebar },
  data() {
    return {
      payments: Array.from({ length: 13 }, (_, i) => ({
        image: new URL(`../assets/Cleaners/${String(i + 1).padStart(2, '0')}.png`, import.meta.url).href,
        name: ['Charlie Brakus', 'Jamie Schroeder', 'Alexander O\'Conner', 'Anne Stanton', 'Abel Brown', 'Lorene Nienow', 'Abel Turcotte', 'Rosa Kohler', 'Mike Sporer', 'Elena Okuneva', 'Darrell Brown', 'Lillian Mohr', 'Kelvin Johnson'][i],
        email: `user${i}@example.com`,
        city: 'Glasgow',
        age: 45,
        dateAdded: '11/6/2022',
        gender: i % 2 === 0 ? 'Female' : 'Male',
        status: ['Active', 'Inactive', 'Active', 'Inactive', 'Active'][i % 5],
        
      })),
      cleaners: [
        { clientName: 'Charlie Brakus', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '1/1/2001', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Ongoing' },
        { clientName: 'Jamie Schroeder', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Payment Pending' },
        { clientName: 'Alexander O\'Conner', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Payment Pending' },
        { clientName: 'Anne Stanton', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'New' },
        { clientName: 'Abel Brown', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'New' },
        { clientName: 'Lorene Nienow', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'New' },
        { clientName: 'Abel Turcotte', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' },
        { clientName: 'Rosa Kohler', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' },
        { clientName: 'Mike Sporer', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' },
        { clientName: 'Elena Okuneva', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' },
        { clientName: 'Darrell Brown', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' },
        { clientName: 'Lillian Mohr', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' },
        { clientName: 'Yelvin Johnson', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' },
        { clientName: 'Rosemary Howe', postCode: 'B455AT', cleaningType: 'Weekly', hours: 8, bookingDate: '11/6/2022', time: '10:00 AM', phoneNumber: '+44 012 9904 9944', status: 'Paid' }
      ],
      isCleanerDetailsVisible: false, 
      isCleanerDetailsVisible: false,
      isCleanerAddDetailsVisible: false,
      user: { 
        name: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        country: '',
        city: '',
        address: '',
        language: ''
      }
    };
  },
  methods: {
    statusClass(status, isCircle = false) {
      const classes = {
        Active: isCircle ? 'active-circle' : 'active',
        Inactive: isCircle ? 'inactive-circle' : 'inactive',
      };
      return classes[status] || '';
    },
    changePage(page) {
          if (page !== '...' && page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
          }
    },
  },
        computed: {
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
    };
</script>

<style scoped>
.container {
  background-color: rgba(240, 240, 240, 1);
  width: 95%;
}
.table {
  vertical-align: middle;
}
.bg-light-green {
  background: rgba(247, 250, 255, 1);
}
.text-dark-green {
  color: rgba(76, 149, 108, 1);
}
.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
}
.status-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.active {
  background-color: rgba(236, 253, 240, 1);
  color: rgba(76, 149, 108, 1);
}
.active-circle {
  background-color: rgba(76, 149, 108, 1);
}
.inactive {
  background-color: rgba(234, 236, 240, 1);
  color: rgba(0, 0, 0, 1);
}
.inactive-circle {
  background-color: rgba(0, 0, 0, 1);
}
.cleaner-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.completed{
  background-color: rgba(236, 253, 240, 1);
  color: rgba(76, 149, 108, 1)
}
.ongoing{
  color: rgba(155, 93, 0, 1);
  background-color: rgba(255, 254, 206, 1);
}
.draft{
  background: rgba(234, 236, 240, 1);
  color: rgba(0, 0, 0, 1);
}
.ongoing-circle{
  background-color:rgba(255, 106, 0, 1) ;
}
.completed-circle{
  background: rgba(76, 149, 108, 1);
}
.draft-circle{
  background: rgba(0, 0, 0, 1);
}
</style>

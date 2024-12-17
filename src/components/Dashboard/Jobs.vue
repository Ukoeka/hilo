<template>
  <div class="job-card">
    <div class="job-header">
      2 Bedroom, 1 Living Room, 1 Kitchen, 1 Small Room, 1 Lobby
    </div>
    <div class="job-details">
      <div class="job-info">
        <div>
          <strong>Location</strong>
          <p>Birmingham (B455AT)</p>
        </div>
        <div>
          <strong>Type</strong>
          <p>Weekly</p>
        </div>
        <div>
          <strong>Date</strong>
          <p>1 - 1 January</p>
        </div>
        <div>
          <strong>Time</strong>
          <p>9am - 10am</p>
        </div>
        <div>
          <strong>Hours</strong>
          <p>8 Hrs</p>
        </div>
      </div>
      <div class="job-actions">
        <button class="view-btn" @click="view">View</button>
        <div class="price">£58</div>
        <button class="claim-btn">Claim</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  
  methods: {
    view() {
      this.$emit("view");
    },
  },
};
</script>

<style scoped>
.job-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.job-header {
  background-color: #d9f8d9;
  padding: 12px 16px;
  font-weight: 600;
  color: #2f4f2f;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #cce7cc;
}

.job-details {
  display: flex;
  justify-content: space-between;
  padding: 16px;
}

.job-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
}

.job-info div {
  flex-basis: calc(20% - 10px);
}

.job-info strong {
  display: block;
  font-size: 13px;
  color: #4a4a4a;
  margin-bottom: 5px;
}

.job-info p {
  font-size: 14px;
  margin: 0;
  color: #6d6d6d;
}

.job-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.view-btn {
  padding: 6px 14px;
  border: 1px solid #4caf50;
  border-radius: 4px;
  background-color: transparent;
  color: #4caf50;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-btn:hover {
  background-color: rgba(76, 175, 80, 0.1);
}

.claim-btn {
  padding: 6px 14px;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.claim-btn:hover {
  background-color: #388e3c;
}

.price {
  font-size: 18px;
  font-weight: 600;
  color: #2f2f2f;
}
</style>

<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row>
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
        </el-row>

        <el-row>
          <el-button plain>Plain</el-button>
          <el-button type="primary" plain>Primary</el-button>
          <el-button type="success" plain>Success</el-button>
          <el-button type="info" plain>Info</el-button>
          <el-button type="warning" plain>Warning</el-button>
          <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row>
          <el-button round>Round</el-button>
          <el-button type="primary" round>Primary</el-button>
          <el-button type="success" round>Success</el-button>
          <el-button type="info" round>Info</el-button>
          <el-button type="warning" round>Warning</el-button>
          <el-button type="danger" round>Danger</el-button>
        </el-row>

        <el-row>
          <el-button icon="el-icon-search" circle />
          <el-button type="primary" icon="el-icon-edit" circle />
          <el-button type="success" icon="el-icon-check" circle />
          <el-button type="info" icon="el-icon-message" circle />
          <el-button type="warning" icon="el-icon-star-off" circle />
          <el-button type="danger" icon="el-icon-delete" circle />
        </el-row>
        <el-row>
          <el-col>
            <p class="future-1">This is a test</p>
            <p class="future-2">This is a test</p>
            <p class="future-3">This is a test</p>
            <p class="future-4">This is a test</p>
            <p class="future-5">This is a test</p>
            <p class="future-6">This is a test</p>
            <p class="future-7">This is a test</p>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.future-1 {
  font-weight: 200;
}
.future-2 {
  font-weight: 300;
}
.future-3 {
  font-weight: 400;
}
.future-4 {
  font-weight: 500;
}
.future-5 {
  font-weight: 600;
}
.future-6 {
  font-weight: 700;
}
.future-7 {
  font-weight: 800;
}
</style>

<template>
    <el-container class="container">
        <el-header class="header">
            <p>用户管理列表</p>
        </el-header>
        <el-container>
            <el-aside class="aside">
                <el-menu
      default-active="1"
      class="menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
              <router-link to="/user/list" tag="p">管理列表</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
              <router-link to="/user/add" tag="p">添加用户</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
.container{
    height: 100%;
}
.menu{
    height: 100%;
}
.header{
    background:brown;
    color:white;
}
</style>


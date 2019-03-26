<template>
  <div class="head">
      <img src="../../assets/logo-2.png" class="img" alt="">
      <Dropdown class="hoveruser">
        <span class="sp">admin <Icon type="ios-arrow-down"></Icon></span>
        <DropdownMenu slot="list">
            <DropdownItem><router-link to="/detail" tag="span"><Icon type="ios-contact-outline" />个人中心</router-link></DropdownItem>
            <DropdownItem><router-link to="/passwd" tag="span"><Icon type="ios-help-buoy-outline" />修改密码</router-link></DropdownItem>
            <DropdownItem><router-link to="/login" tag="span"><Icon type="ios-log-out" />退出</router-link></DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>

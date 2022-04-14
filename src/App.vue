<template> 

<div id="app">
	<nav class="navbar-custom">

			<router-link to="/"> 
			<div class="menu-item browse" id="header">
				<p>CONCERT FINDER</p>
			</div>
			</router-link>
			<router-link to="/calendar"> 
			<div class="menu-item browse">
				<p>My Concert Calendar</p>
			</div>
			</router-link>
	</nav>
	<router-view /> 
	
	<div class="navbar fixed-bottom">
	<div class="container-fluid">
		<a class="navbar-brand" href="https://github.com/jxngeary/Creative-Project-3">Github</a><i class="fa fa-github"></i> 
	</div>
</div>
</div>
</template> 

<style>
* {
  box-sizing: border-box;
}

body {
	background-color: #222629 !important;
}

#app {

  background-color: #222629;

}

.navbar-custom
{
	font-size: 50px;
	background-color: #61892F;
}

#header
{
  font-size: 50px;
  padding: 20px 0px 0px 20px;
}

.menu-item.browse 
{
  text-decoration: none;
  font-size: 30px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: white;
  padding-left: 20px;
  margin-top: 0px;
}

a:hover
{
  text-decoration: none !important;
}

.menu-item.browse:hover
{
  background-color: #86C232;
}



</style>


<script>
export default {
  name: 'Main',
  computed: {
  	cart_qty(){
  		return this.$root.$data.cart.length;
  	}
  },
}
</script>
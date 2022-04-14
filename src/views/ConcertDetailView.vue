<script>

import ConcertDetail from "../components/ConcertDetail.vue"

export default {
  name: 'Concert',
  components: {
    ConcertDetail
  },

  computed: {
    concert() {
      return this.$root.$data.concerts.find(x => x.id === parseInt(this.$route.params.id));
    }
  },
  methods: {
  }
}

</script>

<template> 
<div class='concert-detail'>
		<div class="wrapper">
    		<div class="row">
      			<div class="search col-md-6">
      				<ConcertDetail :concert="concert" />
      			</div>
         	</div>
         </div>	
	</div>
</div>
</template> 
<style lang='css'>

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.fc-h-event {
    display: block;
    border: 1px solid #66FCF1;
    border: 1px solid var(--fc-event-border-color, #66FCF1);
    background-color: #66FCF1;
    background-color: var(--fc-event-bg-color, #66FCF1);
}


#artist_image {
    margin: 10px 0px 20px 0px;
    border: 10px solid white;
    border-radius: 100px;
    height: 350px;
}

a
{	
	color: white;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	font-size: 30px;
	text-decoration: none;
}

.wrapper
{
	text-align: center;
}

#output_display
{
	text-align: center;
	color: white;
}

h1
{
	color: white;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	font-size: px;
}

.info h1[data-v-667b69d2] {

    font-size: 40px;
}

</style>

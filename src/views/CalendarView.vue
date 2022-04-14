<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {

  components: {
    FullCalendar // make the <FullCalendar> tag available
  },

  data: function() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        //initialEvents: this.$root.$data.concerts,
        events: this.$root.$data.concerts,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
    
      },
      currentEvents: []
    }
  },

  methods: {

    handleDateSelect(selectInfo) {
    	
      return;

      let title = prompt('What concert are you going to on this date?')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

    },

    handleEventClick(clickInfo) {

      //let new_url = "/concert-detail/" + clickInfo.event._def["publicId"];
      //window.location.href = new_url
      this.$router.push({ name: 'concert-detail', params: { id: clickInfo.event._def["publicId"] } })


    },

    handleEvents(events) {
 //       this.currentEvents = events
    }
  }
}
</script>

<template>
  <div class='concert-calendar'>
    <div class='concert-calendar-main'>
      <FullCalendar
        class='concert-calendar-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
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
    border: 1px solid #86C232;
    border: 1px solid var(--fc-event-border-color, #86C232);
    background-color: #86C232;
    background-color: var(--fc-event-bg-color, #86C232);
}

.concert-calendar {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 20px;
}

a
{
	color: white;
}

.concert-calendar-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

</style>

<template>
  <!-- Props -->
  <!-- Here inside the Greet componenet we are assigning the name attributes -->
  <!-- But we can also assign dynamic values to props using v-bind directive. That is we can bind data properties/computed properties to props on the component -->
  <!-- As in Vue for props kebab cased is prefered in html & camel case for the javascript as that is the sort of naming convention but both works just fine. -->
  <!-- The kebab case to camel case convertion is supported by vue so we are free to choose the convention of our choice but stick to it throughtout the project -->
  <!-- Here :name and :heroName props are been rendered dynamically -->
  <h1><i>Props & Components</i></h1>
  <br>
  <Greet v-bind:name="name" :heroName="channel" />

  <!-- In this we are passing static values as props --> 
  <Greet name="Bruce" hero-name="Batman" />
  <Greet name="Clark" hero-name="Superman" />
  <Greet name="Diana" hero-name="Wonder Woman" />

  <!-- To ensure that likes will be treated as numbers not as string, so for that we have used v-bind on likes -->.
  <!-- If we do not specify the title prop, then it will automatically render the default value of the title prop. If we specify the prop then default value will be ignored -->
  <!-- This props are called custom attributes -->
  <!-- Here the id attrs get applied to the root div node of template tag present in the Article component. And this is the default behaviour of Vue. -->
  <Article id="my-article" v-bind:likes="50" :isPublished="true" />
  <Article id="my-article" title="Props been used." v-bind:likes="70" :isPublished="false" />

  <!-- Provide/ Inject -->
  <h3>App component {{ name }}</h3>
  <ComponentC />

  <!-- Components Events -->
  <h1>Custom Components Events</h1>
  <button @click="showPopup = true">Show Popup</button>
  <!-- Here in the app component we are listening to the close event present inside the child component. To listen the events we used event binding -->
  <!-- But here the close event is an custom event instead of DOM event & the event name is close -->
  <!-- So instead of @click we listen to our own event @close which is emmiting by the popup component -->
  <Popup v-show="showPopup" @close="closePopup" />
  <Input v-model="username" />

  <!-- Slots -->
  <!-- In Cards btw the opening & closing tag we can specify any content & that would replace the slot tags in child component -->
  <!-- Here all the styles are been done on Card component, but the contents are present inside the App component -->
  <!-- To iterate vue will take the content in btw. opening & closing tags of the Card component & substitute it btw. the slots tag -->
  <!-- Can be an image or text or heading -->
  <!-- Also possible to specify a default slot content of the parent component if does not specify any. -->

  <Card><h1>Slots Tag</h1></Card>
  <Card></Card> <!-- Here it renders the default content present inside slot tags of Card component -->
  <Card>Card Content</Card>
  <Card><img src="https://picsum.photos/200" /></Card>

  <!-- Here we have used multiple slots inside our Card component -->
  <!-- Within the open & close tags we specify the contents to be placed in each of the slots and the way we do that by using the template tag -->
  <!-- here the template tag will contain the name of the slots that has to be palced -->
  <!-- To specify the slot name inside the template tag we use the v-slot directive which is followed by the colon then the slot name -->
  <!-- In this we can add any html elements or tags of our choice -->
  <Card>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <!-- This will choose the default slot present inside the Card Component -->
    <template v-slot:default>
      <img src="https://picsum.photos/200" />
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </Card>

  <!-- Slots Props -->
  <!-- Basically we want the parent component to control how the child component will render the content -->
  <!-- Slot props can be obtained on the template tag -->
  <!-- Here in each of the three cases the logic to render the list of names is same, but the way we display the list of names is controlled by parent component through slots -->
  <NameList>
    <!-- What is special here in v-slot is the right hand side directive will give acess to the slots props send from the child component -->
    <!-- slotProps represents an object that contains all the props send from the child -->
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }}, {{ slotProps.firstName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }}
    </template>
  </NameList>

  <!-- Component Styling -->
  <h4>App component Text</h4>
  <ChildStyles>
    <!-- This h4 gets replaced in the child components slots tag present in the template -->
    <h4>ChildStyles component Text</h4>
  </ChildStyles>

  <!-- Dynamic Components -->
  <!-- By adding the click event only the corresponding tab will be shown. By clicking the button only the active tab will be shown -->
  <!-- We are able to change the content by clicking the button based on the active tab -->
  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>

  <!-- The role of <component /> tag is to render the vue component -->
  <!-- And the way we inform this tag what component to be rendered is through the :is attribute -->
  <!-- Each time we switch btw the tabs vue creates a new instances, which is the default behaviour of vue. And bcoz of this we loss the current data -->
  <!-- Here vue is keeping the dynamic componenet alive even tough the componenet is inactive. -->
  <keep-alive>
    <component :is="activeTab"></component> 
  </keep-alive>

  <!-- Teleport Component -->
  <!-- This allow us to move elements from one place to another -->
  <!-- Teleport tag or component is specific to vue only, not a standart HTML element -->
  <!-- On teleport tag we specify the attribute to whose value is any html elemnet or any query selector which specifies a target element where the content has to be moved -->
  <!-- Here we want to teleport the component to div tag whose id is portal-root -->
  <teleport to="#portal-root">
    <Portal />
  </teleport>
</template>

<script>
import Article from './components/Article.vue'
import Greet from './components/Greet.vue'
import ComponentC from './components/ComponentC.vue'
import Popup from './components/Popup.vue'
import Input from './components/Input.vue'
import Card from './components/Card.vue'
import NameList from './components/NameList.vue'
import ChildStyles from './components/ChildStyles.vue'
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'
import TabC from './components/TabC.vue'
import Portal from './components/Portal.vue'

// In order to recoznise the greet component by the app componenet, inside the script block we need to specify a property called components.
// And in the components we need to specify the key as well as the value as Greet. 
// Here we have used the shorthand syntax, so greet is the key as well as the value.
// So basically we are informing the vue about the greet component to be utilized inside the app component.
export default {
  name: 'App',
  components: {
    Greet,
    Article,
    ComponentC,
    Popup,
    Input,
    Card,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    Portal,
  },
  data() {
    return {
      name: 'Amrit',
      channel: 'ZenSar',
      showPopup: false,
      username: '',
      friends: ['Chandler', 'Joey', 'Monica'],
      activeTab: 'TabC', /* Here by deafult Tab C will be shown when the page is rendered first time */
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false
      console.log('name', name)
    },
  },
  /* Provide is been used to directly send data & props to req component. This is step 1. */
  /* Here we define property that we want the child components to consume without having to pass it in as prop. */
  /* Providing the username from the App component to component F */
  /* For step 2 we head over to component F & inject the username property in default export. */
  provide() {
    return {
      userName: this.name,
    }
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>

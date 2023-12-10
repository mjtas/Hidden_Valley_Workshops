<template>
  
  <div class="main">
    <div class="main-container">
      <div class="other-heading">
        <h1>Hidden Valley</h1>
        <h2>Blog</h2>
      </div>
      <div class="about-other">
        <div class="block">
          <div class="table-left">
            <ul class="main-text">
              <h3>November 2023</h3>
              <li class="main-li" v-for="(text, index) in blog2Text" :key="index">
                <span :class="{'highlight': isHighlighted(text)}">{{ text }}</span>
              </li>
            </ul>
          </div>
          <div class="main-right">
            <div class="booking-container">
              <input v-model="searchQuery" class="search-input" placeholder="Search for keywords">
              <button @click="clearSearch" class="clear-button" v-show="searchQuery">X</button>
            </div>
            <SubscriptionForm />
            <div class="main-opaque">
              <img class="about-img" src="../assets/blog2.png" alt="Hidden Valley">
            </div>
          </div>
        </div> 
        <div class="block">
          <div class="table-left">
            <ul class="main-text">
              <h3>October 2023</h3>
              <li class="main-li" v-for="(text, index) in blog1Text" :key="index">
                <span :class="{'highlight': isHighlighted(text)}">{{ text }}</span>
              </li>
            </ul>
          </div>
          <div class="main-right">
            <div class="main-opaque">
              <img class="about-img" src="../assets/blog.png" alt="Hidden Valley">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubscriptionForm from '../components/SubscriptionForm.vue';

export default {
  components: {
    SubscriptionForm
  },
  data() {
    return {
      subscribers: [], // Store subscriber details
      searchQuery: "", // Store the search query
      blog1Text: [
      "Hello everyone! I am so excited to be launching my new business running practical skills workshops at Hidden Valley. It is amazing how much I enjoy spending time in my garden these days. When I first started out gardening over 10 years ago, garden time was a list of jobs I needed to get done in order to produce cheap and healthy food. In my new No Dig garden I garden to centre and ground myself, and simply being in it makes me happy. And who would have thought compost making would become such an engaging hobby?! Instead of bringing in my garden inputs I now make great compost myself - a very satisfying process indeed.",
      "I have also been baking all of my family’s bread for the last 10 years - giving me plenty of time to develop an efficient method of baking artisan sourdough. I love giving my kids such delicious and nourishing bread, and they love eating it! I also really value the way bread baking is time spent being completely present and focused on the birth of the dough.",
      "When I am not gardening, baking or looking after the kids I am busy doing a building project around the house somewhere. I like being able to build exactly what I want, when I want to, without having to rely on others to do it for me. I am really excited to introduce more women to building tools and skills so that they can gain enough confidence and know-how to do their own building projects too.",
      "It will be great to share this special place with others, and I hope I can spread my enthusiasm for a more grounded way of life doing things for ourselves."
      ],
      blog2Text: [
      "November is my favourite month in the garden. Plants grow at a rapid rate with the warmer temperatures, there is so much promise and excitement for the season ahead, and the first crops are coming into the kitchen.",
      "Less than 18 months ago the garden site was a pile of subsoil from the earthworks for our house, and it is amazing how well the soil is recovering with the No Dig method of gardening. After the first year weeds have been few and easy to spot when they are small, and the garden is a happy place. This is a great achievement, because spring can be awfully stressful for gardeners as weeds and the list of things to do can turn gardening into a list of jobs that need to get done, rather than the fulfilling and relaxing soul-charging activity which it should be.",
      "My first spring gardening with a greenhouse has also been amazing. It is so much easier to grow all of my own seedlings in small module trays on the greenhouse bench instead of trying to grow them in the house or the open garden as I did last year. Success breeds confidence, and it is awfully satisfying having a constant supply of homegrown vegetable and flower seedlings to pop out into the garden.",
      "I have been having wonderful dreams filled with piles of tomatoes and basil pesto. Brushing past the plants gives off that amazing tomato plant aroma, which sets me off into another daydream. Time flies by as I sit on my chair in the greenhouse, and the kids have learnt to look for me there when I go missing!",
      "Happy gardening everyone!"
      ]
    };
  },
  computed: {
    // Compute the mainTextWithHighlights based on the searchQuery
    mainTextWithHighlights() {
      return this.mainText.map((text) => this.highlightSearchTerms(text, this.searchQuery));
    },
  },
  methods: {
    // Check if a text contains highlighted search terms
    isHighlighted(text) {
      if (!this.searchQuery) return false; // No search query, no highlighting

    // Find all occurrences of the searchQuery
      const regex = new RegExp(this.searchQuery, "gi");

      // Check if the text contains any matches
      return text.match(regex) !== null;
    },
    // Function to highlight search terms in text
    highlightSearchTerms(text, searchQuery) {
      if (!searchQuery) return text; // Return the original text if searchQuery is empty

      // Find all occurrences of the searchQuery
      const regex = new RegExp(searchQuery, "gi");

      // Replace the search term with a highlighted version
      return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    },
    // Function to clear the search bar
    clearSearch() {
      this.searchQuery = "";
    },
  },
}
</script>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const bookReview = ref({
  title: '',
  stars: null,
  review: ''
})
const isAddingReview = ref(false)

const addStar = () => {
  (bookReview.value.stars < 5) ? bookReview.value.stars++ : bookReview.value.stars
}

const removeStar = (index) => {
  bookReview.value.stars = index + 1
}

const bookReviews = ref(localStorage.getItem('reviews') ? JSON.parse(localStorage.getItem('reviews')) : [])

const addReview = () => {
  isAddingReview.value = false
  bookReviews.value.push(bookReview.value)
  localStorage.setItem('reviews', JSON.stringify(bookReviews.value))
  bookReview.value = {
    stars: 'null'
  }
}
</script>

<template lang="pug">
header(
  w:bg="secondary"
  w:h="20"
  w:pos="fixed"
  w:shadow="xl"
  w:w="full"
  w:z="1000"
)
  div(
    w:align="items-center"
    w:container="~"
    w:flex="~"
    w:h="full"
    w:justify="between"
  )
    RouterLink(
      to="/"
      class="theme-title"
      w:text="light"    
    )
      | Book Review App
    
    Icon(
      icon="mdi-book-plus-multiple"
      w:cursor="pointer"
      w:text="light 4xl"
      @click="isAddingReview = !isAddingReview"
    )

main(
  w:bg="light"
  w:h="screen"
  w:pos="relative"
)
  div(
    w:bg="primary"
    w:h="col-6"
  )

  div(
    v-if="isAddingReview",
    w:align="items-center"
    w:bg="dark-700 opacity-50"
    w:flex="~"
    w:justify="center"
    w:h="screen"
    w:overflow="hidden"
    w:pos="absolute top-0"
    w:w="screen"
    w:z="500"
  )
    section(
      w:bg="white"
      w:h="col-7"
      w:min-h="md:md"
      w:w="col-6 lg:col-4"
      w:rounded="xl"
      w:shadow="xl"
    )
      form(
        @submit.prevent="addReview"
        w:flex="~ col"
        w:p="2xl"
        w:space="y-lg"
      )
        label(
          class="theme-light-spread"
          w:cursor="pointer"
          w:text="focus:secondary"
        )
          | TITLE
          input(
            v-model="bookReview.title"
            name="title"
            w:border="1 focus:(dashed primary)"
            w:outline="focus:none"
            w:w="full"
          )

        div(
          w:flex="~"
          w:align="items-center"
          w:space="x-xl"
        )
          Icon(
            icon="mdi-star-plus-outline"
            w:cursor="pointer"
            w:text="gray-500 4xl"
            @click="addStar"
          )

          template(
            v-for="(star, index) in bookReview.stars"
            :key="`star-${index}`"
          )
            Icon(
              icon="mdi-star"
              w:cursor="pointer"
              w:text="amber-500 4xl"
              @click="removeStar(index)"
            )

        label(
          class="theme-light-spread"
          w:cursor="pointer"
        )
          | REVIEW
          input(
            v-model="bookReview.review"
            name="review"
            w:border="1 focus:(dashed primary)"
            w:outline="focus:none"
            w:w="full"
          )
        
        button(
          class="theme-light-spread"
          type="submit"
          w:align="self-end"
          w:bg="light"
          w:p="x-md"
          w:shadow="md"
        ) 
          | ADD REVIEW

</template>

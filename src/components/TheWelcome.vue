<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import { ref } from 'vue'

const skills = ref([
  'Vue.js',
  'reactJs',
  'nextJs',
  'expressJs',
  'adonisJs',
  'tailwindCss',
  'bootstrap',
  'redux',
  'TypeScript',
  'JavaScript',
  'CSS',
  'SCSS',
  'REST API',
  'HTML',
  'Vue CLI',
  'Vue Router',
  'jest',
  'react testing library',
  'Google Analytics',
  'SEO',
  'Git',
  'GitHub',
  'scrum',
  'team collaboration',
  'problem solving',
  'responsive design',
])

const dragStart = (event: DragEvent, index: number) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemIndex', index.toString())
  }
}

const drop = (event: DragEvent, index: number) => {
  event.preventDefault()
  const oldIndex = parseInt(event.dataTransfer?.getData('itemIndex') || '0')
  const temp = [...skills.value]
  const item = temp[oldIndex]
  temp.splice(oldIndex, 1)
  temp.splice(index, 0, item)
  skills.value = temp
}

const dragOver = (event: DragEvent) => {
  event.preventDefault()
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Skills</template>

    <ul class="skills-list flex flex-wrap gap-2">
      <li
        v-for="(skill, index) in skills"
        :key="skill"
        draggable="true"
        @dragstart="dragStart($event, index)"
        @drop="drop($event, index)"
        @dragover="dragOver"
        title="Drag and drop to reorder"
        class="cursor-move font-semibold px-2 shadow-sm border border-green-600 hover:shadow-2xl shadow-green-500 bg-green-400 hover:bg-gray-200 hover:text-black text-gray-600 p-2 rounded-3xl transition-colors duration-200"
      >
        {{ skill }}
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tools</template>
    TraeAI, VSCode, Git, GitHub
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Social</template>
    <ul class="social-links flex flex-wrap gap-2 mt-4">
      <li class="w-full">
        <a
          href="https://www.linkedin.com/in/muhamad-son-ani-549230153/"
          target="_blank"
          rel="noopener"
          title="Lets Connect"
          class="inline-block font-semibold bg-green-400 p-3 !text-gray-600 rounded-3xl hover:!bg-[#0A66C2] hover:!text-white transition-colors duration-200 hover:shadow-md hover:border-2 shadow-white"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </WelcomeItem>
</template>

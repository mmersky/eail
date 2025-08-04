<script setup lang="ts">
import homeContent from '@/content/home-content.md'

// Define tool interface
interface Tool {
  title: string
  icon: string
  description: string
  buttonText: string
  link: string
}

// Get tools from frontmatter
const tools = homeContent.frontmatter.tools as Tool[]

// Get pre-parsed HTML for hero section
const heroHtml = homeContent.html
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <section id="hero" class="mb-16 hero-content" v-html="heroHtml"></section>

      <!-- Tools Grid -->
      <section id="tools-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(tool, index) in tools"
          :key="index"
          :id="`tool-card-${index + 1}`"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="p-6">
            <div class="flex items-center mb-4">
              <i :class="[tool.icon, 'text-[rgb(236,0,140)] text-2xl mr-3']"></i>
              <h3 class="text-xl font-semibold text-gray-900">{{ tool.title }}</h3>
            </div>
            <p class="text-gray-600 mb-4">{{ tool.description }}</p>
            <div class="flex justify-end">
              <a
                :href="tool.link"
                class="inline-flex items-center text-sm font-medium text-[rgb(236,0,140)] hover:text-[rgb(236,0,140)]/80 transition-colors"
              >
                {{ tool.buttonText }}
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.hero-content :deep(h1) {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: rgb(14, 33, 58);
  margin-bottom: 1rem;
}

.hero-content :deep(p) {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #6b7280;
  max-width: 48rem;
  margin-bottom: 1rem;
}

.hero-content :deep(p:last-child) {
  margin-bottom: 0;
}

.hero-content :deep(a) {
  color: rgb(236, 0, 140);
}

.hero-content :deep(a:hover) {
  color: rgb(236, 0, 140);
}
</style>
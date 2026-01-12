<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-column ga-4">
    <VList rounded="xl" lines="two">
      <VListSubheader title="General" />
      <VListItem prepend-icon="mdi-translate" link>
        <VListItemTitle>Language</VListItemTitle>
        <VListItemSubtitle class="text-primary-darken-1">
          English (US)
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-brightness-6" link>
        <VListItemTitle>Theme</VListItemTitle>
        <VListItemSubtitle class="text-primary-darken-1">
          System
        </VListItemSubtitle>
      </VListItem>
    </VList>

    <VList rounded="xl" lines="two">
      <VListSubheader title="Update" />
      <VListItem prepend-icon="mdi-update" link>
        <VListItemTitle>Check Updates</VListItemTitle>
        <VListItemSubtitle class="text-primary-darken-1">
          0.0.1
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-swap-horizontal" link>
        <VListItemTitle>Switch Update Channels</VListItemTitle>
        <VListItemSubtitle class="text-primary-darken-1">
          Stable
        </VListItemSubtitle>
      </VListItem>
    </VList>

    <VList rounded="xl" lines="two">
      <VListSubheader title="Global Launch Settings" />
      <VListItem prepend-icon="mdi-puzzle" link>
        <VListItemTitle>Java Location</VListItemTitle>
        <VListItemSubtitle class="text-primary-darken-1">
          path/to/java/location
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-tag" link>
        <VListItemTitle>Custom JVM Argument</VListItemTitle>
        <VListItemSubtitle class="text-primary-darken-1">
          -Xms1G -Xmx4G
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-memory" link>
        <VListItemTitle>Memory Allocation</VListItemTitle>
        <VListItemSubtitle>
          Sets minimum and maximum memory allocation.
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-share-variant" value="shareDirectory">
        <VListItemTitle>Share Game Directory</VListItemTitle>
        <VListItemSubtitle>
          Shares same folder between different game profiles.
        </VListItemSubtitle>
        <template #append="{ isSelected, select }">
          <VListItemAction end>
            <VCheckboxBtn
              :model-value="isSelected"
              @update:model-value="select"
            />
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </div>
</template>

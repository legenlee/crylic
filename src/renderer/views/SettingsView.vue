<script setup lang="ts"></script>

<template>
  <VContainer class="d-flex flex-column ga-4">
    <VList rounded="xl" lines="two">
      <VListSubheader title="General" />
      <VListItem prepend-icon="mdi-translate" link>
        <VListItemTitle>Language</VListItemTitle>
        <VListItemSubtitle class="text-primary">
          English (US)
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-update" link>
        <VListItemTitle>And more settings 1</VListItemTitle>
        <VListItemSubtitle>placeholder</VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-update" link>
        <VListItemTitle>And more settings 1</VListItemTitle>
        <VListItemSubtitle>placeholder</VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-update" link>
        <VListItemTitle>And more settings 1</VListItemTitle>
        <VListItemSubtitle>placeholder</VListItemSubtitle>
      </VListItem>
    </VList>

    <VList rounded="xl" lines="two">
      <VListSubheader title="Global Launch Settings" />
      <VListItem prepend-icon="mdi-puzzle" link>
        <VListItemTitle>Java Location</VListItemTitle>
        <VListItemSubtitle class="text-primary">
          Java Location placeholder
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-tag" link>
        <VListItemTitle>Custom JVM argument</VListItemTitle>
        <VListItemSubtitle class="text-primary">
          JVM argument placeholder
        </VListItemSubtitle>
      </VListItem>

      <VListItem prepend-icon="mdi-memory" link>
        <VListItemTitle>Memory allocation</VListItemTitle>
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
  </VContainer>
</template>

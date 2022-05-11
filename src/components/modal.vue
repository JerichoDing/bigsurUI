<template>
  <div class="pop-up">
    <div class="pop-up__title">
      Update This App
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="close feather feather-x-circle"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    </div>
    <div class="pop-up__subtitle">
      Adjust your selections for advanced options as desired before continuing.
      <a href="#">Learn more</a>
    </div>
    <div class="checkbox-wrapper">
      <input type="checkbox" id="check1" class="checkbox" />
      <label for="check1">Import previous settings and preferences</label>
    </div>
    <div class="checkbox-wrapper">
      <input type="checkbox" id="check2" class="checkbox" />
      <label for="check2">Remove old versions</label>
    </div>
    <div class="content-button-wrapper">
      <button class="content-button status-button open close">Cancel</button>
      <button class="content-button status-button">Continue</button>
    </div>
  </div>
  <div class="overlay-app"></div>
</template>
<style lang="scss" scoped>
.pop-up {
  position: absolute;
  padding: 30px 40px;
  top: 50%;
  left: 50%;
  transform: (translate(-50%, -50%));
  overflow-y: auto;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  z-index: 10;
  background-color: var(--popup-bg);
  color: var(--theme-color);
  width: 500px;
  visibility: hidden;
  opacity: 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  white-space: normal;
  @media screen and (max-width: 570px) {
    width: 100%;
  }
  &.visible {
    visibility: visible;
    opacity: 1;
  }
  &__title {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      color: var(--icon-color);
    }
  }
  &__subtitle {
    white-space: normal;
    margin: 20px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8em;

    a {
      color: var(--theme-color);
    }
  }

  .content-button-wrapper .content-button.status-button.open.close {
    width: auto;
  }

  
}
.overlay-app {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: all;
  background-color: rgba(36, 39, 59, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  &.is-active {
    visibility: visible;
    opacity: 1;
  }
}
</style>

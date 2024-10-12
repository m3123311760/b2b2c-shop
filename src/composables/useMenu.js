import { ref } from 'vue'

export function useMenu() {
  const isMenuActive = ref(false)
  const isSubMenuActive = ref(false)
  let menuTimeout = null
  let subMenuTimeout = null

  const showMenu = () => {
    clearTimeout(menuTimeout)
    isMenuActive.value = true
  }

  const hideMenu = () => {
    menuTimeout = setTimeout(() => {
      isMenuActive.value = false
    }, 300)
  }

  const showSubMenu = () => {
    clearTimeout(subMenuTimeout)
    isSubMenuActive.value = true
  }

  const hideSubMenu = () => {
    subMenuTimeout = setTimeout(() => {
      isSubMenuActive.value = false
    }, 300)
  }

  return {
    isMenuActive,
    isSubMenuActive,
    showMenu,
    hideMenu,
    showSubMenu,
    hideSubMenu,
  }
}

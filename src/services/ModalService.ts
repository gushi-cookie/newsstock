import { defineAsyncComponent, shallowReactive, type Component } from 'vue'


export interface ModalState {
    component: Component | null,
    title: string,
    isOpen: boolean,
}

export const modalState = shallowReactive<ModalState>({
    component: null, 
    title: '',
    isOpen: false,
});

/**
 * Open modal with a specific component inside.
 * @param title Modal title.
 * @param componentName Name of a component file.
 */
export function openModal(title: string, componentName: string) {
    modalState.component = defineAsyncComponent(() => import(`@/components/${componentName}.vue`));
    modalState.title = title;
    modalState.isOpen = true;
};

/**
 * Clear modalState object.
 */
export function closeModal() {
    modalState.isOpen = false;
    modalState.component = null;
    modalState.title = '';
}
import { reactive } from 'vue'

export interface ModalState {
    componentName: string,
    title: string,
    isOpen: boolean,
}

export const modalState = reactive({
    componentName: '',
    title: '',
    isOpen: false,
});

export function openModal(title: string, name: string) {
    modalState.title = title;
    modalState.componentName = name;
};

export function closeModal() {
    modalState.isOpen = false;
    modalState.componentName = '';
    modalState.title = '';
}
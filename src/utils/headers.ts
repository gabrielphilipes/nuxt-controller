import { useHead } from '#head'

export const standartizarionHeader = (title: string, description: string): void => {
    const siteName = import.meta.env.VITE_APP_NAME

    useHead({
        title,
        titleTemplate: `%s - ${siteName}`,
        meta: [
            { hid: 'description', name: 'description', content: description },
        ],
    })
}

import EnvTypes from '~/types/env'

/**
 * Get the environment variables.
 *
 * @param envirolment {string} The environment to get the variables for.
 * @returns {EnvTypes} The environment variables
 */
export function Env(envirolment: keyof EnvTypes): string | number | boolean | null {
    const envVite = import.meta.env[`VITE_${envirolment}`] as string | number | boolean | null
    const env = import.meta.env[envirolment] as string | number | boolean | null

    return envVite || env
}

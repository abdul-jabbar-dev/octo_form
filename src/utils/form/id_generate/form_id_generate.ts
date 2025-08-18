export const GenerateFormId = (prefix: string): string => {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base-36 string
    const randomPart = Math.random().toString(36).substring(2, 8); // Generate a random string of 6 characters
    return `${prefix}-${timestamp}-${randomPart}`; // Combine prefix, timestamp, and random part
}
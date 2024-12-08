
export const useGetToken = (name: string = 'token'): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    // console.log(parts)
    return null;
}

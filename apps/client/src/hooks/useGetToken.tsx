
export const useGetToken = (name: string = 'token'): string | null => {
    // const value = `; ${document.cookie}`;
    // console.log(value)
    // const parts = value.split(`; ${name}=`);
    const parts = name.split(`=`);

    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    // console.log(parts)
    return null;
}

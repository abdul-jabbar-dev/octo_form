export default async function Page({
    params,
}: {
    params: Promise<{ form_id: string }>
}) { 
    const { form_id } = await params
    return (
        < >My Post: {form_id}</>)
}
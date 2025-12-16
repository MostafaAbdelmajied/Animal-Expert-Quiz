export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "jsProject"); 

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dpjzyrtcp/image/upload",
      {
        method: "POST",
        body: formData
      }
    );

  const data = await response.json();

  return data.secure_url;

} catch (error) {
  console.error( error);
  return null;
}
}
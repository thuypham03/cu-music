import Footer from "../Layout/Footer";
import ProfileLayout from "../Layout/UserProfile/ProfileLayout";
import ProfileContentsLayout from "../Components/Profile/ProfileContents";
import AddSong from "../Components/AddSong";

export default function Profile() {
  return (
    <>
      <ProfileLayout title="Profile Page" showLogin={false}></ProfileLayout>
      <ProfileContentsLayout />
      <Footer />
    </>
  );
}

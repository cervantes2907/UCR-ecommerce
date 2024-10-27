import { FaUserCircle } from "react-icons/fa";
import IUserSession from "@/interfaces/IUserSession";
import { cookies } from "next/headers";

const ProfileViews: React.FC = () => {
  const cookieStore = cookies();
  const userDataCookie: IUserSession = JSON.parse(cookieStore.get("userData")?.value ?? "{}");

  if (!userDataCookie || !userDataCookie.user) {
    return <div className="text-center text-gray-600">No profile information available</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center pl-20 mb-6">
        <FaUserCircle size={100} className="text-gray-600 mr-4" />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">My Profile</h2>
          <p className="text-gray-500">Welcome back, {userDataCookie.user.name}</p>
        </div>
      </div>
      
      <div className="space-y-4 pl-24">
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-32">Nombre:</span>
          <p className="text-gray-900">{userDataCookie.user.name}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-32">Dirección:</span>
          <p className="text-gray-900">{userDataCookie.user.address}</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-gray-700 w-32">Teléfono:</span>
          <p className="text-gray-900">{userDataCookie.user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileViews;

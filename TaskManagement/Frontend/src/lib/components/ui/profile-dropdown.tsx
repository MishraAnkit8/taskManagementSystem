import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import ProfileIcon from '../icons/profile-icon'
import { toast } from 'react-toastify'; // You can replace this with your toast library
// import { useHistory } from 'react-router-dom'; // or useNavigate if you're on React Router v6
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; 

interface ProfileMenuProps {
  src: string;
  name: string;
  email: string;
  username: string;
}

const ProfileDropdown: React.FC<ProfileMenuProps> = ({ src, name, email, username }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong!');
      }
      
      toast.success('Logged out successfully!');
    
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong!');
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle tag="div">
        <Button className="border-0" variant="outline">
          <ProfileIcon /> 
        </Button>
      </DropdownToggle>
      <DropdownMenu className="w-56 bg-white">
        <div>
          <div className="font-semibold">{name ?? ''}</div>
          <div className="text-xs font-normal italic py-0 mb-1">{email ?? ''}</div>
          <div className="text-xs font-normal italic py-0 mb-1">{username ?? ''}</div>
        </div>

        <hr />

        <DropdownItem>
          <User className="mr-2 h-4 w-4" />
          <a href={`${process.env.REACT_APP_BASE_URL}/profile`} className="font-semibold">
            Profile
          </a>
        </DropdownItem>

        <DropdownItem onClick={handleLogout} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span className="font-semibold">Log out</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;

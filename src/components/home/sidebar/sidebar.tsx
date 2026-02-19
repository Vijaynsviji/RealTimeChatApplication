import ContactList from "./contactlist";
import SideBarHeader from "./sidebarheader";
import SideBarSearch from "./sidebarsearch";



export default function SideBar() {
    return (<>
        <SideBarHeader />
        <SideBarSearch />
        <ContactList />
    </>
    );
}
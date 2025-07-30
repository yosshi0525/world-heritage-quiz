import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>世界遺産クイズ</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>日本の遺産</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

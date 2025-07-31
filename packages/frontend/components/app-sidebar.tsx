import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>世界遺産クイズ</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<Link href="quiz">日本の遺産</Link>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

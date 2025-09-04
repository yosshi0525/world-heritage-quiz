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
			<SidebarHeader className="text-2xl font-bold">
				世界遺産クイズ
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<Link href={{ pathname: "/quiz" }}>クイズ</Link>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}

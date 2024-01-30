"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Header = ({ userData }: { userData: User | undefined }) => {
	const router = useRouter();

	const handleLogin = () => {
		supabaseBrowser.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: location.origin + "auth/callback"
			}
		});
	}

	const handleLogout = async() => {
		await supabaseBrowser.auth.signOut();
		router.refresh();
	}

	return (
		<div className="flex flex-row justify-between p-4 w-full">
			<div className="flex flex-col space-y-2">
				<h1 className="text-lg font-bold">Only Chat</h1>
				<div className="flex items-center flex-row space-x-2">
					<div className="animate-pulse bg-green-500 h-4 rounded-full w-4"></div>
					<p>2 online users</p>
				</div>
			</div>
			{
				userData 
				?
				<Button className="text-white" onClick={handleLogout}>Logout</Button>
				:
				<Button className="text-white" onClick={handleLogin}>Login</Button>
			}
		</div>
	);
}

export default Header;
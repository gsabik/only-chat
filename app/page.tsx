import Header from "@/components/Header";
import { supabaseServer } from "@/lib/supabase/server";

const HomePage = async() => {
	const supabase = supabaseServer();
	const { data } = await supabase.auth.getSession();
	const userData = data.session?.user;

	return (
		<div className="max-w-screen-lg mx-auto md:py-10 h-screen">
			<div className="h-full border rounded-md">
				<Header userData={userData}/>
			</div>
		</div>
	);
}

export default HomePage;
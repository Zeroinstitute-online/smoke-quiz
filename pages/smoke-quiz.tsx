import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import smokeQuizData from '../data/smokeQuizData.json';

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Make&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
					<br />
					<h1 className={title()}>
						websites regardless of your design experience.
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						1-Minute Personal Assessment
					</h4>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div>...</div>
			</section>
		</DefaultLayout>
	);
}

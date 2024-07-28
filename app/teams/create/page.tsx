import CreateTeamForm from "./_components/CreateTeamForm";
import CreateTeamNavbar from "./_components/CreateTeamNavbar";

export default function CreateTeamPage() {
  return (
    <div className="min-h-screen px-8 pt-20 pb-8 md:px-16">
      <CreateTeamNavbar />
      <CreateTeamForm />
    </div>
  );
}

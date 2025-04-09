import { Separator } from "@/components/ui/separator";
import InviteMember from "@/components/workspace/member/invite-member";
import AllMembers from "@/components/workspace/member/all-members";
import WorkspaceHeader from "@/components/workspace/common/workspace-header";

export default function Members() {
  return (
    <div className="w-full h-auto pt-2">
      <WorkspaceHeader />
      <Separator className="my-4" />

      <main>
        <div className="w-full max-w-3xl mx-auto pt-3">
          <header>
            <h2 className="text-lg leading-[30px] font-semibold mb-1">
              Workspace Members
            </h2>
            <p className="text-sm text-muted-foreground">
              Workspace members can view and join all Workspace projects, tasks,
              and create new tasks within the Workspace.
            </p>
          </header>

          <Separator className="my-4" />

          <InviteMember />
          <Separator className="my-4 !h-[0.5px]" />

          <AllMembers />
        </div>
      </main>
    </div>
  );
}

import React, { useEffect } from "react";
import { useAuthContext } from "@/context/auth-provider";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { useNavigate } from "react-router-dom";
import { Permissions } from "@/constant";

const withPermission = (WrappedComponent, requiredPermission) => {
  const WithPermission = (props) => {
    const { user, hasPermission, isLoading } = useAuthContext();
    const navigate = useNavigate();
    const workspaceId = useWorkspaceId();

    useEffect(() => {
      if (!user || !hasPermission(requiredPermission)) {
        navigate(`/workspace/${workspaceId}`);
      }
    }, [user, hasPermission, navigate, workspaceId]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    // Check if user has the required permission
    if (!user || !hasPermission(requiredPermission)) {
      return null;
    }

    // If the user has permission, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return WithPermission;
};

export default withPermission;

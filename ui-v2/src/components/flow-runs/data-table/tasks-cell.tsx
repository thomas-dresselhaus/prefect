import {
	type FlowRunWithDeploymentAndFlow,
	type FlowRunWithFlow,
} from "@/api/flow-runs";
import { Icon } from "@/components/ui/icons";

import { Typography } from "@/components/ui/typography";
import { pluralize } from "@/utils";
import clsx from "clsx";

type TasksCellsProp = {
	flowRun: FlowRunWithFlow | FlowRunWithDeploymentAndFlow;
};

export const TasksCell = ({ flowRun }: TasksCellsProp) => {
	const taskRunsCount = 0;

	return (
		<div className="flex items-center gap-2">
			<Icon id="Spline" />
			<Typography
				variant="bodySmall"
				className={clsx(taskRunsCount === 0 && "text-muted-foreground")}
			>
				{taskRunsCount} {pluralize(taskRunsCount, "Task run")}
			</Typography>
		</div>
	);
};

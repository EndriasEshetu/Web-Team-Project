import { Link } from "react-router-dom";
import {
  CalendarDays,
  Stethoscope,
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
  CircleDot,
} from "lucide-react";
import { useAdminDashboard } from "../hooks/useAdmin";

const statusMeta = {
  Pending: { label: "Pending", color: "text-amber-400", icon: CircleDot },
  Confirmed: { label: "Confirmed", color: "text-sky-400", icon: Clock3 },
  Completed: {
    label: "Completed",
    color: "text-emerald-400",
    icon: CheckCircle2,
  },
  Cancelled: { label: "Cancelled", color: "text-red-400", icon: XCircle },
};
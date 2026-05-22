import { useState, useMemo } from "react";
import { Search, Filter, Calendar as CalendarIcon, User, ChevronRight, LayoutGrid, List } from "lucide-react";
import { useDoctors, useBookAppointment } from "../hooks/usePatient";
import { usePublicAvailability } from "../hooks/useAvailability";

import { useNavigate } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import DoctorDetailsPanel from "../components/DoctorDetailsPanel";
import TimeSlotPicker from "../components/TimeSlotPicker";
import BookingSummary from "../components/BookingSummary";


import { ref } from "vue";
import { defineStore } from "pinia";

import { ILanguage } from "../components/LanguageSection.vue";
import { IProjects } from "../components/ProjectsSections.vue";
import FirebaseService from "../services/firebase.service";

export interface IUserInfo {
  name: string;
  jobRole: string;
  email: string;
  location: string;
  additionalLinks: string[];
  languages: ILanguage[];
  skills: string[];
  projects: IProjects[];
}

const useResumeStore = defineStore("resumeStore", () => {
  const defaultValues: IUserInfo = {
    name: "Add your name in configurator",
    jobRole: "",
    email: "",
    location: "",
    additionalLinks: [],
    languages: [],
    skills: [],
    projects: [],
  };

  const resumeData = ref<IUserInfo>();

  const getDataFromDB = () => {
    FirebaseService.getResumeData()
      .then((res) => {
        resumeData.value = res.data() as IUserInfo;
      })
      .catch(() => {
        resumeData.value = defaultValues;
      });
  };

  return { resumeData, getDataFromDB };
});

export default useResumeStore;

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

export type configuratorTypes = "skills" | "languages" | "projects";

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

  const updateValues = (type: configuratorTypes, value: string): void => {
    if (resumeData.value)
      switch (type) {
        case "skills":
          FirebaseService.updateSkills(
            resumeData.value.skills.concat(value)
          ).then(() => resumeData.value?.skills.push(value));

          break;
        case "languages":
          break;
        case "projects":
          break;
      }
  };

  const deleteValues = (type: configuratorTypes, deleteIdx: number) => {
    if (resumeData.value)
      switch (type) {
        case "skills":
          const filteredSkills: string[] = resumeData.value.skills.filter(
            (_val, i) => i !== deleteIdx
          );
          FirebaseService.updateSkills(filteredSkills).then(() => {
            if (resumeData.value?.skills)
              resumeData.value.skills = filteredSkills;
          });
          break;
        case "languages":
          break;
        case "projects":
          break;
      }
  };

  return { resumeData, getDataFromDB, updateValues, deleteValues };
});

export default useResumeStore;

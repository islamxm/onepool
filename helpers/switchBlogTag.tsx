import { values } from "@/data/blogdata";

const switchBlogTag = (type: values) => {
    switch(type) {
        case 'bath':
            return {
                bgColor: '#ED8B6D',
                label: 'БАНИ И САУНЫ'
            }
        case 'comp':
            return {
                bgColor: '#0857A0',
                label: 'КОМПОЗИТНЫЕ бассейны'
            }
        case 'conc':
            return {
                bgColor: '#288FAF',
                label: 'бетонные бассейны'
            }
        case 'iron':
            return {
                bgColor: '#1E8CF1',
                label: 'ЖЕЛЕЗНЫЕ бассейны'
            }
        case 'panel':
            return {
                bgColor: '#DFB072',
                label: 'Панельные бассейны'
            }
        case 'spa':
            return {
                bgColor: '#36C591',
                label: 'СПА'
            }
        
    }
}

export default switchBlogTag;
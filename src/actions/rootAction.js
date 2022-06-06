export const GO_TO_LOGIN = 'GO_TO_LOGIN';
export const GO_TO_MAIN = 'GO_TO_MAIN';
export const GO_TO_GID_PROFIL = 'GO_TO_GID_PROFIL';
export const GO_TO_ABOUT_US = 'GO_TO_ABOUT_US'
export const CREATE_EVENT = 'CREATE_EVENT'
export const CHANGE_USER = 'CHANGE_USER'
export const GO_TO_EVENT = 'GO_TO_EVENT'
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const CHANGE_EVENT_PATH = 'CHANGE_EVENT_PATH'
export const CHANGE_IMAGE = 'CHANGE_IMAGE'

export const loginAction = path => (
    {type: GO_TO_LOGIN,
    payload: path}
)

export const mainAction = path => (
    {type: GO_TO_MAIN,
        payload: path}
)

export const gidProfileAction = path => (
    {type: GO_TO_GID_PROFIL,
        payload: path}
)

export const goToAboutUs = path => (
    {type: GO_TO_ABOUT_US,
    payload: path}
)

export const createEvent = path => (
    {type: CREATE_EVENT,
    payload: path}
)

export const goToEventPage = path => (
    {type: GO_TO_EVENT,
        payload: path}
)

export const changeUser = user => (
    {
        type: CHANGE_USER,
        payload:user
    }
)

export const changeTitle = (title, date, img, place, text, price, city) => (
    {
        type: CHANGE_TITLE,
        payload: {title, date, img, place, text, price, city}
    }
)

export const changeEventPath = eventPath => (
    {
        type: CHANGE_EVENT_PATH,
        payload: eventPath
    }
)

export const imageDownload = link => (
    {
        type: CHANGE_IMAGE,
        payloadL: link
    }
)



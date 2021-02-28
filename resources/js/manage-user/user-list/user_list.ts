interface UserListParams {
    id: number | string;
    name: string;
    date_created: string;
    role: string;
    status: string;
}

export default class UserList {
    protected listUser;

    constructor(list_user: UserListParams[]) {
        this.listUser = list_user;
    }

    renderUserList(): void {
        let templateUser = '';
        this.listUser.forEach(user => {
            templateUser += `<tr class="js-user-${user.id}">
                    <td><span class="user-id">${user.id}</span></td>
                    <td><a href="#"><img src="/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"> <span class="user-name">${user.name}</span></a></td>
                    <td><span class="date_created">${user.date_created}</span></td>
                    <td>${user.role}</td>
                    <td><span class="status text-success">&bull;</span> ${user.status}</td>
                    <td>
                        <a href="#" class="settings"  data-value="${user.id}" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                        <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                    </td>
                </tr>`;
        });
        const el = document.querySelector('.user-list');
        if (el) {
            el.innerHTML = templateUser;
            const settings = document.querySelectorAll('.settings');
            settings.forEach(setting => {
                setting.addEventListener('click', () => {
                    const data = setting.getAttribute('data-value');
                    if (data) {
                        this.editHandler(data);
                    }
                });
            });
        }
    }

    editHandler(id: string): void {
        const userClass = '.js-user-' + id;
        const userEl = document.querySelector(userClass);
        const userNameElement = userEl!.querySelector('.user-name');
        const newInputElement = document.createTextNode('input');
        if (userNameElement) {
            userNameElement!.replaceChild(newInputElement, userNameElement);
        }
    }

    render(): void {
        this.renderUserList();
    }
}

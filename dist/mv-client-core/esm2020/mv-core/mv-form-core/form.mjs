import { FormData, PanelData } from './formData';
/**
 * represents the data model, both structure and run-time data
 */
export class Form {
    constructor() {
        /**
         * what operations are allowed on this form.
         */
        this.opsAllowed = {};
        /**
         * for operations are offered to guests/unauthenticated/non-logged-in users?
         */
        this.serveGuests = false;
    }
    /**
     * name of this form.
     */
    getName() {
        // name of this form
    }
    ;
    /**
     * create a model (data-holder) for this form
     * @param serverAgent is injectable
     */
    newFormData(serverAgent) {
        return new FormData(this, serverAgent);
    }
    /**
     * create a model (data-holder) for this form
     * @param serverAgent is injectable
     */
    newPanelData(serverAgent) {
        return new PanelData(this, serverAgent);
    }
    /**
     *
     * @param operation
     * @returns service name of the form "operation-formName", say filter-costomer
     */
    getServiceName(operation) {
        if (this.opAllowed(operation)) {
            return operation + '_' + this.getName();
        }
        console.error('Operation ' + operation + ' not allowed on form ' + this.getName());
        return null;
    }
    /**
     *
     * @param operation
     * @returns true of this operation is designed for this form
     */
    opAllowed(operation) {
        if (this.opsAllowed && this.opsAllowed[operation]) {
            return true;
        }
        console.error('Form ', this.getName(), ' is not designed for ', operation, ' operation');
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL212LWNsaWVudC1jb3JlL3NyYy9tdi1jb3JlL212LWZvcm0tY29yZS9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBS2pEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUk7SUFBakI7UUE4QkM7O1dBRUc7UUFDSSxlQUFVLEdBQStCLEVBQUUsQ0FBQztRQUVuRDs7V0FFRztRQUNJLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBa0Q1QixDQUFDO0lBaERBOztPQUVHO0lBQ0ksT0FBTztRQUNkLG9CQUFvQjtJQUNwQixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNJLFdBQVcsQ0FBQyxXQUF5QjtRQUMzQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWSxDQUFDLFdBQXlCO1FBQzVDLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksY0FBYyxDQUFDLFNBQWlCO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixPQUFPLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFHLHVCQUF1QixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxTQUFTLENBQUMsU0FBaUI7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekYsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRGF0YSwgUGFuZWxEYXRhIH0gZnJvbSAnLi9mb3JtRGF0YSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTZWxlY3RPcHRpb24gfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgU2VydmljZUFnZW50IH0gZnJvbSAnLi9zZXJ2aWNlQWdlbnQnO1xyXG5cclxuLyoqXHJcbiAqIHJlcHJlc2VudHMgdGhlIGRhdGEgbW9kZWwsIGJvdGggc3RydWN0dXJlIGFuZCBydW4tdGltZSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybSB7XHJcblx0LyoqXHJcblx0ICoga2V5LUZpZWxkIHBhaXJzLiBoYXMgYWxsIHRoZSBmaWVsZHMgb2YgdGhpcyBmb3JtXHJcblx0ICovXHJcblx0cHVibGljIGZpZWxkczogTWFwPHN0cmluZywgRmllbGQ+IHwgdW5kZWZpbmVkO1xyXG5cdC8qKlxyXG5cdCAqIGtleS1UYWJsZSBwYWlycy4gaGFzIGFsbCB0aGUgdGFibGVzIChzdWItZm9ybXMpIGluIHRoaXMgZm9ybVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjaGlsZEZvcm1zOiBNYXA8c3RyaW5nLCBDaGlsZEZvcm0+IHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKipcclxuXHQgKiBtZXRhLWRhdGEgZm9yIGFsbCBjb250cm9scyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIGZvcm1Hcm91cCB1c2luZyBmb3JtQnVpbGRlci5ncm91cCgpXHJcblx0ICovXHJcblx0cHVibGljIGNvbnRyb2xzOiBNYXA8c3RyaW5nLCBWYWxpZGF0b3JGbltdPiB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqXHJcblx0ICogaW50ZXItZmllbGQgdmFsaWRhdGlvbnNcclxuXHQgKi9cclxuXHRwdWJsaWMgdmFsaWRhdGlvbnM6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+IHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKipcclxuXHQgKiBmaWVsZCBuYW1lcyB0aGF0IGhhdmUgZW51bWVyYXRlZGxpc3Qgb2YgdmFsdWVzLiBUaGF0IGlzLGZpZWxkcyB0aGF0IGFyZSB0byBiZSByZW5kZXJlZCBhcyBkcm9wLWRvd25zXHJcblx0ICovXHJcblx0cHVibGljIGxpc3RGaWVsZHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKipcclxuXHQgKiBmaWVsZHMgdGhhdCBtYWtlIHVwIHRoZSBwcmltYXJ5IGtleS4gZ2VuZXJhbGx5IG9ubCBvbmUsIGJ1dCBwb3NzaWJsZSB0byBoYXZlIG1vcmUgdGhhbiBvbmVcclxuXHQgKi9cclxuXHRwdWJsaWMga2V5RmllbGRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqXHJcblx0ICogd2hhdCBvcGVyYXRpb25zIGFyZSBhbGxvd2VkIG9uIHRoaXMgZm9ybS5cclxuXHQgKi9cclxuXHRwdWJsaWMgb3BzQWxsb3dlZDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcblx0LyoqXHJcblx0ICogZm9yIG9wZXJhdGlvbnMgYXJlIG9mZmVyZWQgdG8gZ3Vlc3RzL3VuYXV0aGVudGljYXRlZC9ub24tbG9nZ2VkLWluIHVzZXJzP1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXJ2ZUd1ZXN0cyA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBuYW1lIG9mIHRoaXMgZm9ybS4gXHJcblx0ICovXHJcblx0cHVibGljIGdldE5hbWUoKTogYW55IHtcclxuXHQvLyBuYW1lIG9mIHRoaXMgZm9ybVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIGNyZWF0ZSBhIG1vZGVsIChkYXRhLWhvbGRlcikgZm9yIHRoaXMgZm9ybVxyXG5cdCAqIEBwYXJhbSBzZXJ2ZXJBZ2VudCBpcyBpbmplY3RhYmxlIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuZXdGb3JtRGF0YShzZXJ2ZXJBZ2VudDogU2VydmljZUFnZW50KTogRm9ybURhdGEge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtRGF0YSh0aGlzLCBzZXJ2ZXJBZ2VudCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBjcmVhdGUgYSBtb2RlbCAoZGF0YS1ob2xkZXIpIGZvciB0aGlzIGZvcm1cclxuXHQgKiBAcGFyYW0gc2VydmVyQWdlbnQgaXMgaW5qZWN0YWJsZSBcclxuXHQgKi9cclxuXHRwdWJsaWMgbmV3UGFuZWxEYXRhKHNlcnZlckFnZW50OiBTZXJ2aWNlQWdlbnQpOiBQYW5lbERhdGEge1xyXG5cdFx0cmV0dXJuIG5ldyBQYW5lbERhdGEodGhpcywgc2VydmVyQWdlbnQpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gb3BlcmF0aW9uIFxyXG5cdCAqIEByZXR1cm5zIHNlcnZpY2UgbmFtZSBvZiB0aGUgZm9ybSBcIm9wZXJhdGlvbi1mb3JtTmFtZVwiLCBzYXkgZmlsdGVyLWNvc3RvbWVyXHJcblx0ICovXHJcblx0cHVibGljIGdldFNlcnZpY2VOYW1lKG9wZXJhdGlvbjogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcblx0XHRpZiAodGhpcy5vcEFsbG93ZWQob3BlcmF0aW9uKSkge1xyXG5cdFx0XHRyZXR1cm4gb3BlcmF0aW9uICsgJ18nICsgdGhpcy5nZXROYW1lKCk7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmVycm9yKCdPcGVyYXRpb24gJyArIG9wZXJhdGlvbiArICcgbm90IGFsbG93ZWQgb24gZm9ybSAnICsgdGhpcy5nZXROYW1lKCkpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gb3BlcmF0aW9uIFxyXG5cdCAqIEByZXR1cm5zIHRydWUgb2YgdGhpcyBvcGVyYXRpb24gaXMgZGVzaWduZWQgZm9yIHRoaXMgZm9ybVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBvcEFsbG93ZWQob3BlcmF0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLm9wc0FsbG93ZWQgJiYgdGhpcy5vcHNBbGxvd2VkW29wZXJhdGlvbl0pIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmVycm9yKCdGb3JtICcsIHRoaXMuZ2V0TmFtZSgpLCAnIGlzIG5vdCBkZXNpZ25lZCBmb3IgJywgb3BlcmF0aW9uLCAnIG9wZXJhdGlvbicpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGlsZEZvcm0ge1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRmb3JtOiBGb3JtO1xyXG5cdGlzVGFidWxhcjogYm9vbGVhbjtcclxuXHJcblx0bGFiZWw/OiBzdHJpbmc7XHJcblx0bWluUm93cz86IG51bWJlcjtcclxuXHRtYXhSb3dzPzogbnVtYmVyO1xyXG5cdGVycm9ySWQ/OiBzdHJpbmc7XHJcblx0aXNFZGl0YWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xyXG5cdC8qKiBcclxuXHQgKiByZXF1aXJlZCBhdHRyaWJ1dGVzXHJcblx0ICovXHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogMC10ZXh0LCAxLWludGVnZXIsIDItZGVjaW1hbCwgMy1ib29sZWFuLCA0LWRhdGUsIDUtdGltZXN0YW1wXHJcblx0ICovXHJcblx0dmFsdWVUeXBlOiAwIHwgMSB8IDIgfCAzIHwgNCB8IDU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIG9wdGlvbmFsIGF0dHJpYnV0ZXNcclxuXHQgKi9cclxuXHRkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xyXG5cdGFsdExhYmVsPzogc3RyaW5nO1xyXG5cdHBsYWNlSG9sZGVyPzogc3RyaW5nO1xyXG5cdHRydWVMYWJlbD86IHN0cmluZztcclxuXHRmYWxzZUxhYmVsPzogc3RyaW5nO1xyXG5cdGlzRWRpdGFibGU/OiBib29sZWFuO1xyXG5cdGVycm9ySWQ/OiBzdHJpbmc7XHJcblx0aXNSZXF1aXJlZD86IGJvb2xlYW47XHJcblx0bWluTGVuZ3RoPzogbnVtYmVyO1xyXG5cdG1heExlbmd0aD86IG51bWJlcjtcclxuXHRyZWdleD86IHN0cmluZztcclxuXHRtaW5WYWx1ZT86IG51bWJlcjtcclxuXHRtYXhWYWx1ZT86IG51bWJlcjtcclxuXHRuYnJGcmFjdGlvbnM/OiBudW1iZXI7XHJcblx0bmJyRGVjaW1hbHM/OiBudW1iZXI7XHJcblx0bGlzdE5hbWU/OiBzdHJpbmc7XHJcblx0bGlzdEtleT86IHN0cmluZztcclxuXHR2YWx1ZUxpc3Q/OiBTZWxlY3RPcHRpb25bXTtcclxuXHRrZXllZExpc3Q/OiB7IFtrZXk6IHN0cmluZ106IFNlbGVjdE9wdGlvbltdIH07XHJcblx0Y29udHJvbFR5cGU/OiBcIkhpZGRlblwiIHwgXCJJbnB1dFwiIHwgXCJEcm9wZG93blwiIHwgXCJPdXRwdXRcIiB8IFwiQ2hlY2tib3hcIiB8IFwiUGFzc3dvcmRcIiB8IFwiVGV4dGFyZWFcIiB8IFwiQnV0dG9uXCI7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdGhpbnQ/OiBzdHJpbmc7XHJcblx0bXVsdGlwbGVTZWxlY3Q/OiBib29sZWFuO1xyXG5cdGljb24/OiBzdHJpbmc7XHJcblx0c3VmZml4Pzogc3RyaW5nO1xyXG5cdHByZWZpeD86IHN0cmluZztcclxuXHRidXR0b25UeXBlPzogc3RyaW5nO1xyXG5cclxufVxyXG5cclxuIl19
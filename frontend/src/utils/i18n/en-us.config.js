(function () {
    'use strict';
    angular.module('app.utils')
        .config(i18nEn);

    /* @ngInject */
    function i18nEn($translateProvider) {
        $translateProvider.translations('en-us', {
            //general
            "Create Time": 'Create Time',
            "Update Time": 'Update Time',
            "Operation": 'Operation',
            "Update": 'Update',
            "Real Monitoring": 'Real Monitoring',
            "Log": 'Log',
            "Detail": 'Detail',
            "Container": 'Container',
            "Status":"Status",
            "Driver":"Driver",
            "Can not be empty":"can not be empty",
            "Only number and letter":"name only can be number and letter",
            "Next":"Next",
            "Previous":"Previous",
            "Cancel": "Cancel",
            "Done":"Done",
            "YES": "YES",
            "NO": "NO",
            "ID":"ID",
            "Labels":"Labels",
            "Created":"Created",
            "Local":"Local",
            "Version":"Version",
            "Name":"Name",
            "Service":"Service",
            "Task":"Task",
            "Operating":"Operating",
            "Not configured":"Not configured",

            //index module
            "LOGOUT": 'Logout',
            "Stack": 'Project',
            "Image": 'Image',
            "Facility": 'Facility',
            "Node": 'Node',
            "Network": 'Network',
            "Warehouse certification": 'Warehouse certification',
            "Information": 'Information',
            "Activation": 'Activation',

            //stack module
            "Stack List": 'Stack List',
            "Create Project": 'Create Project',
            "Service Update": 'Service Update',
            "Project Detail": 'Project Detail',
            "Service Detail": 'Service Detail',
            "Choose the way to create": 'Choose the way to create',
            "Create of DAB": 'DAB',
            "Create of Form": 'Guide',
            "Create of Shortcut": 'Shortcut',
            "Delete Project": 'Delete Project',
            "Add to template": 'Add to template',
            "Service List": 'Service List',
            "Service Name": 'Service Name',
            "Task Number": 'Task Number',
            "Running/Total": 'Running/Total',
            "Service Scale": 'Service Scale',
            "Modal title for delete stack": 'The project will not be able to recover after deletion, confirm to be deleted?',
            "Task List": 'Task List',
            "Discovery": 'Discovery',
            "CICD": 'CICD',
            "TaskId": 'Task Id',
            "Task State": 'Task State',
            "Abnormal": 'Abnormal',
            "Task_state_new": 'new',
            "Task_state_allocated": 'allocated',
            "Task_state_pending": 'pending',
            "Task_state_assigned": 'assigned',
            "Task_state_accepted": 'accepted',
            "Task_state_preparing": 'preparing',
            "Task_state_ready": 'ready',
            "Task_state_starting": 'starting',
            "Task_state_running": 'running',
            "Task_state_complete": 'complete',
            "Task_state_shutdown": 'shutdown',
            "Task_state_failed": 'failed',
            "Task_state_rejected": 'rejected',

            // node module
            "Basic Information":"Basic Information",
            "Summary": "Summary",
            "Hostname": "Hostname",
            "Network Mode": "Network Mode",
            "Network Name":"Network Name",
            "HostnamePath": "Hostname Path",
            "HostsPath": "Hosts Path",
            "LogPath": "Log Path",
            "ResolvConfPath":"ResolvConf Path",
            "Environment Variables": "Environment Variables",
            "Port Mapping":"Port Mapping",
            "Port":"Port",
            "Protocol":"Protocol",
            "Network Configuration":"Network Config",
            "Gateway":"Gateway",
            "Gateway illegal":"gateway illegal",
            "IP Address":"IP Address",
            "MAC Address":"MAC Address",
            "Container labels":"Container Labels",
            "Volume":"Volume",
            "Path":"Path",
            "Start Command":"Command",
            "Image Name":"Image",
            "Change":"Changed",
            "Terminal":"Terminal",
            "Change mode":"Change Mode",
            "File Path": "File Path",
            "No information about the changes":"no information about the changes",
            "No log information":"no log information",
            "IP address format error":"IP address format error",
            "Host IP":"Host IP",
            "IP range":"IP Range",
            "IP range illegal":"IP range illegal",
            "Install Docker":"1. Install Docker",
            "Docker intalled":"if Docker was installed, please skip。",
            "Copy code":"Click To Copy",
            "Add host":"2. Command of add host",
            "Exec add host cmd":"Please sign the target host，run the following command，This operation requires sudo privileges.",
            "Create host nerwork":"Create Host Nerwork",
            "Subnet Mask":"Subnet Mask",
            "Subnet Mask illegal":"subnet mask illegal",
            "Internal Network":"Internal Network",
            "Can add multiple labels":"Can add multiple labels",
            "Add labels":"Add Labels",
            "Labels key can not contain Chinese":"labels key can not contain Chinese",
            "Labels key can not repeat":"labels key can not repeat",
            "Labels value can not contain Chinese":"labels value can not contain Chinese",
            "Add volume":"Add Volume",
            "Volume name":"Volume Name",
            "Docker info":"Docker Info",
            "Volume driver":"Volume Driver",
            "Volume dir":"Volume Dir",
            "Debug model":"Debug Mode",
            "Cgroup driver":"Cgroup Driver",
            "Allows memory overflow":"Allows memory overflow",
            "Host information":"Host Information",
            "Core":"Core",
            "Memory":"Memory",
            "Kernel version":"Kernel Version",
            "System time":"System Time",
            "Internal address":"Internal Address",
            "Status and operation hours": "Status/operation hours",
            "Remove":"Remove",
            "Kill":"Kill",
            "Running containers":"Running Containers",
            "Total containers":"Total Containers",
            "Pasued containers":"Pasued Containers",
            "Stopped containers":"Stopped Containers",
            "Images":"Images",
            "Host labels":"Host Labels",
            "Created volume":"Created Volume",
            "Size":"Size",
            "Remove image":"Remove Image",
            "Container number":"Container Number",
            "Remove network":"Remove Network",
            "Mount points":"Mount Points",
            "Remove volume":"Remove Volume",
        });
    }
})();

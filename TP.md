# TP

## TP1

À partir des images kmarques/demo-node et kmarques/demo-nginx, créer une configuration Kubernetes qui déploie un service Nginx sur le port 80 et qui est accessible depuis l'extérieur du cluster. Le service doit être exposé via un LoadBalancer. Le service Nginx doit être configuré pour servir l'application web de démonstration fournie dans l'image kmarques/demo-node. Le service Nginx doit être configuré pour rediriger les requêtes vers le service Node.js sur le port configuré dans un configMap.

Nom de l'application : kube-tp1

Faire en sorte que les labels permettent de retrouver facilement les ressources créées pour ce TP.
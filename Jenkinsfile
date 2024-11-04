// Jenkinsfile
pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Создание Docker образа
                    def app = docker.build("mercurybigpencil/hello-world-app:latest")
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Запуск контейнера для тестирования
                    app.inside {
                        sh 'npm test'  // или другой тестовый скрипт
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Вход в Docker Hub и загрузка образа
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        app.push()
                    }
                }
            }
        }
    }
}

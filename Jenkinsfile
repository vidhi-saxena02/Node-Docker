pipeline {
    agent any
    stages {
        stage('build image') {
            steps {
                script {
                    echo "Building docker image"
                    sh 'docker build -t node-app-image .'
                }
            }
        }
    }
}
